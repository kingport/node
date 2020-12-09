const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    // error 堆栈调用信息  不应该返回客户端 需要简化处理 返回清晰明了的信息    
    // HTTP Status code 2xx 4xx 5xx
    // error code  自己定义设计 更加详细的错误
    // request_url 当前请求的url

    // 已知型错误 用户传参数错误 不符合校验规则 基本可以判断出来 处理错误 明确
    // try catch 捕捉到已知错误 也可以处理错误

    // 未知型错误 程序潜在的错误 无意识的错误
    // koa 中连接数据库 账号密码 输错 
    
    ctx.body = "服务有点问题";
    
  }
};
module.exports = catchError