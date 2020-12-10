const requireDriectory = require("require-directory");
const Router = require("koa-router");

class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app;
    InitManager.initLoadRouter();
    InitManager.loadHttpException();
    InitManager.loadConfig();
  }
  static initLoadRouter() {
    // 使用绝对路径
    const apiDirectory = `${process.cwd()}/app/api`;
    requireDriectory(module, apiDirectory, { visit: whenModules });

    function whenModules(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
      }
    }
  }
  // 全局错误类
  static loadHttpException() {
    const errors = require("./http-exception");
    // 存入全局
    global.errs = errors;
  }
  // 全局配置文件
  static loadConfig(path = "") {
    const configPath = path || process.cwd() + "/config/config.js";
    const config = require(configPath);
    global.config = config;
  }
}

module.exports = InitManager;
