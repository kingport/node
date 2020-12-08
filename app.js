const Koa = require("koa");
// commonJS ES6 AMD
// node中使用es6 中import 还是实验特性
// ES10 import decorator class  都不支持
// babel 没必要 对服务端来说

// 应用程序对象 中间件 koa 接受http
const app = new Koa();

// 注册
// app.use(async (ctx, next) => {
//   // 上下文
//   console.log(1);
//   // next 下一个中间件函数
//   await next();
//   console.log(2);
// });

app.use(async (ctx, next) => {
  const axios = require("axios");
  const res = await axios.get("http://7yue.pro");
  console.log(res);
});

app.listen(3000);
