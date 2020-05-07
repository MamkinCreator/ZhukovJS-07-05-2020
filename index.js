require('http')
.Server((req, res) => {
    res.setHeader('Content-Type','text/html; charset=utf-8')
    let now = Date()
    res.end('<h1>Zhukov Sergey</h1>', <h2>${now}<h2>);
 })
.listen(process.env.PORT);
