const { Sequelize, Model } = require("sequelize");
const { db } = require("../../core/db");

// 定义user类
class User extends Model {}

User.init(
  {
    // 编号系统推荐使用数字类型  不推荐用随机字符串 GUID 查询起来速度很慢
    // 并发10000 ，注册
    // 曝露用户编号12345
    // 我们需要做到即使别人知道编号信息也无法攻破
    // 权限 访问接口 保护 token
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true, // 设为主键  关系型数据库  不能重复 不能为空  注册 User id 设计一个id编号系统  自动增长id编号 1 2 3 4
      autoIncrement: true,
    },
    nickname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    openid: {
      type: Sequelize.STRING(64),
      unique: true,
    },
    test: Sequelize.STRING,
  },
  { sequelize: db, tableName: "user" }
);
