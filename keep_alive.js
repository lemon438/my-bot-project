var http = require('http');

http.createServer(function (req, res) {
  res.write("Skulling bot: am alive");
  res.end();
}).listen(8800);
