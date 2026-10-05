module.exports = (sequelize, DataTypes) => {
  const Lang = sequelize.define("Lang", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
  }, {
    tableName: "lang",
    timestamps: true
  });

  Lang.associate = (models) => {
    Lang.hasMany(models.Customer, {
      foreignKey: "lang_id",
      as: "customers",
    });
    Lang.hasMany(models.Event, {
      foreignKey: "lang_id",
      as: "events",
    });
  };
  return Lang;
};
