const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    hashed_password: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
      unique: true
    },
    birth_date: {
      type: DataTypes.DATEONLY
    },
    gender_id: {
      type: DataTypes.BIGINT
    },
    lang_id: {
      type: DataTypes.BIGINT
    },
    hashed_refresh_token: {
      type: DataTypes.STRING
    },
  }, {
    tableName: "customer",
    timestamps: true
  });

  Customer.beforeSave(async (instance, options) => {
    if (instance.changed("hashed_password")) {
      instance.hashed_password = await bcrypt.hash(instance.hashed_password, 10);
    }
  });
  Customer.associate = (models) => {
    Customer.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
    Customer.belongsTo(models.Lang, {
      foreignKey: "lang_id",
      as: "lang",
    });
    Customer.hasMany(models.CustomerCard, {
      foreignKey: "customer_id",
      as: "cards",
    });
    Customer.hasMany(models.CustomerAddress, {
      foreignKey: "customer_id",
      as: "addresses",
    });
    Customer.hasMany(models.Cart, {
      foreignKey: "customer_id",
      as: "carts",
    });
    Customer.hasMany(models.User, {
      foreignKey: "customer_id",
      as: "users",
    });
  };
  return Customer;
};
