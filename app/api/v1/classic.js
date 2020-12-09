const Router = require("koa-router");
const router = new Router();
router.post("/v1/:id/classic/latest", (ctx, next) => {
  ctx.body = {
    key: "classic",
  };
  // 异常处理 异常处理的应用
  throw new Error('API ERROR')
});

module.exports = router;
 