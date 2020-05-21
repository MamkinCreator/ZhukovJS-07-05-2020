const moment = require('moment');
require('http')
.Server((req, res) => {
    res.setHeader('Content-Type','text/html; charset=utf-8')
    const now = moment().format('DD/MM/Y H:mm');
    res.end('<h1>Zhukov Sergey</h1><h2>${now}<h2>');
 })
.listen(process.env.PORT);
