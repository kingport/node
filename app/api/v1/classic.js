const Router = require("koa-router");
const router = new Router();

// 错误类
// const {
//   HttpException,
//   ParameterException,
// } = require("../../../core/http-exception");

const { PostintegerValidator } = require("../../validators/validator");
//
router.post("/v1/:id/classic/latest", async (ctx, next) => {
  // User
  // 通用型的用户系统 小程序的用户系统
  // 账号 密码 附属信息（昵称 email phone）
  // 注册  登录
  // 客户端-----http----koaApi ---- model处理------写入Mysql
  // 数据库2大类  关系型数据库（SQLsever Oracle postgresSQL） 非关系型数据库 (redis 主要做缓存（键值对 key value）  MongoDB(文档型))
  // 为了持久存储数据 持久化

  const v = await new PostintegerValidator().validate(ctx);
  ctx.body = "success";
});

module.exports = router;
