require('http')
.Server((req, res) => {
    res.writeHead(200, {
         'Content-Type': 'application/json; charset=utf-8',
      });
    res.end(document.getElementById("h1").innerHTML = "Zhukov Sergey");
 })
.listen(process.env.PORT);
