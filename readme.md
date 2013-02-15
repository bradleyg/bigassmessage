##bigassmessage API

###Example app:

```
var app = require('express')()
var big = require('bigassmessage')

app.get('/:message/:style?', function(req, res){
  big(req.params.message, req.params.style, function(url){
    res.redirect(url)
  })
})

app.listen(process.env.PORT || 3000)
```

Choose up to 3 styles:  
__magic__  
__heart__  
__disco__
  
Click [here](http://bigassmessage.herokuapp.com/) for a demo.
  
99.9% not my work  
[http://bigassmessage.com](http://bigassmessage.com)
