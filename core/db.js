const Sequelize = require("sequelize");
const { database } = require("../config/config");
// 接受4个参数 dbname user pwd {}
const sequelist = new Sequelize(
  database.dbName,
  database.user,
  database.password,
  {
    dialect: "mysql",
    host: database.host,
    port: database.port,
    timezone: "+08:00", // 相差8小时
    define: {
      //  create_time updata_time delete_time
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      underscored: true,
    },
    // logging: true
  }
);

sequelist.sync({
  force: true,
});

module.exports = { db: sequelist };
