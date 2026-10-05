const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    customer_id: {
      type: DataTypes.BIGINT
    },
  }, {
    tableName: "users",
    timestamps: true
  });

  User.beforeSave(async (instance, options) => {
    if (instance.changed("password")) {
      instance.password = await bcrypt.hash(instance.password, 10);
    }
  });
  User.associate = (models) => {
    User.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
  };
  return User;
};
