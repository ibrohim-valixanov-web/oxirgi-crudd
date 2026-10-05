const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
    login: {
      type: DataTypes.STRING,
      unique: true
    },
    hashed_password: {
      type: DataTypes.STRING
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    is_creator: {
      type: DataTypes.BOOLEAN
    },
    hashed_refresh_token: {
      type: DataTypes.STRING
    },
  }, {
    tableName: "admin",
    timestamps: true
  });

  Admin.beforeSave(async (instance, options) => {
    if (instance.changed("hashed_password")) {
      instance.hashed_password = await bcrypt.hash(instance.hashed_password, 10);
    }
  });
  return Admin;
};
