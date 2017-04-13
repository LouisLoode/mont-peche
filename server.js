const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const port = process.env.PORT || 8000;

// $ GET /hello.txt
app.use(serve('app'));

// or use absolute paths
// app.use(serve(__dirname + '/test/fixtures'));

app.listen(port);

console.log('listening on port '+port);
