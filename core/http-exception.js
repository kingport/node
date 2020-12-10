class HttpException extends Error {
  constructor(errorCode = 10000, msg = "服务器异常", code = 400) {
    super();
    this.errorCode = errorCode;
    this.msg = msg;
    this.code = code;
  }
}

// 参数错误
class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.code = 400;
    this.msg = msg || "参数错误了呀";
    this.errorCode = errorCode || "10000";
  }
}

// class NotFound extends 

module.exports = {
  HttpException,
  ParameterException,
};
