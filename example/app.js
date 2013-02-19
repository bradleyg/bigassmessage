var app = require('express')()
var big = require('bigassmessage')

app.get('/', function(req, res){
  res.render('intro.ejs')
})

app.get('/:message/:style?', function(req, res){
  big(req.params.message, req.params.style, function(url){
    res.render('index.ejs', {
      url: url
    })
  })
})

app.listen(process.env.PORT || 3000)