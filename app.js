const Koa = require("koa");
const parser = require("koa-bodyparser");
// 初始化
const InitManager = require("./core/init");
// 全局捕捉错误
const catchError = require("./middlewares/exception");

const app = new Koa();
app.use(parser());
app.use(catchError);
InitManager.initCore(app);
app.listen(3000);
