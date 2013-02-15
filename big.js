var request = require('request')
var qs = require('querystring')

var api = 'http://bigassmessage.com/'
var path = '/BAM.php?'

module.exports = function(message, style, cb){
    
  var params = qs.stringify({
    action: 'SAVE',
    theMessage: message,
    theStyle: style || 'magic'
  })
  
  request(api + path + params, function(err, res){
    var id = res.body.match(/<msgid>(.+?)<\/msgid>/)[1]
    cb(api + id)
  })
}