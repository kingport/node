const requireDriectory = require("require-directory");
const Router = require("koa-router");

class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app;
    InitManager.initLoadRouter();
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
}

module.exports = InitManager;
