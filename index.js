require('http')
.Server((req, res) => {
    res.writeHead(200, {
         'Content-Type': 'application/json; charset=utf-8',
         'Access-Control-Allow-Origin': '*'
      });
    res.end('<h1>Жуков Сергей</h1>');
 })
.listen(process.env.PORT);
