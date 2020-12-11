class HttpException extends Error {
  constructor(msg = "服务器异常", errorCode = 10000, code = 400) {
    super();
    this.errorCode = errorCode;
    this.msg = msg;
    this.code = code;
  }
}

// 参数错误
class ParameterException extends HttpException {
  constructor(msg = "参数错误", errorCode = 10000) {
    super();
    this.code = 400;
    this.msg = msg;
    this.errorCode = errorCode;
  }
}

module.exports = {
  HttpException,
  ParameterException,
};
