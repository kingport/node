const Router = require("koa-router");
const { RegisterValidator } = require("../../validators/validator");
const router = new Router({
  prefix: "/v1/user",
});

// 用户注册
router.post("/register", async (ctx) => {
  // 思维路径
  // 接受参数 Linvalidator 校验
  // email pwd1 pwd2 nickname
  const v = await new RegisterValidator().validate(ctx);
});

module.exports = router;
