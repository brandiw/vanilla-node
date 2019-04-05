// Include the HTTP core module
var http = require('http')
var moment = require('moment')

// Create a server that listens for connections on a specified port
http.createServer(function(req, res) {
  res.write(moment().format('MMM Do YYYY'))
  res.write('\nHey it\'s my second node app!\n')
  res.write(moment('09-11-1985', 'MM DD YYYY').format('dddd [the] Do [of] MMMM [in the year] YYYY'))
  res.write('\n\n\nWow, that was ' + moment('09-11-1985', 'MM DD YYYY').fromNow())
  res.end()
}).listen(8000)
