
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

module.exports = {
  PostintegerValidator,
};
