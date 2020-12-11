const { LinValidator, Rule } = require("../../core/lin-validator");
class PostintegerValidator extends LinValidator {
  constructor() {
    super();
    this.id = [
      // 接受3个参数 1满足什么规则 2提示信息 3选填信息
      new Rule("isInt", "需要正整数", { min: 1 }),
    ];
  }
}

// 注册校验
class RegisterValidator extends LinValidator {
  constructor() {
    super();
    this.email = [new Rule("isEmail", "不符合邮箱")];
    this.password1 = [
      // 用户密码指定范围
      new Rule("isLength", "最少6个字符最多32个字符", { min: 6, max: 32 }),
      // new Rule('matches', '密码不符合规范', '正则')
    ];
    this.password2 = this.password1;
    this.nickname = [
      new Rule("isLength", "最少4个字符最多32个字符", { min: 4, max: 32 }),
    ];
  }

  validatePassword(vals) {
    const pwd1 = vals.body.password1;
    const pwd2 = vals.body.password2;
    if (pwd1 != pwd2) {
      throw new Error("两个密码必须相同");
    }
  }
}
module.exports = {
  PostintegerValidator,
  RegisterValidator,
};
