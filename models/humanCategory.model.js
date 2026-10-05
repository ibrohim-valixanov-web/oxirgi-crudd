module.exports = (sequelize, DataTypes) => {
  const HumanCategory = sequelize.define("HumanCategory", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
    start_age: {
      type: DataTypes.INTEGER
    },
    finish_age: {
      type: DataTypes.INTEGER
    },
    gender_id: {
      type: DataTypes.BIGINT
    },
  }, {
    tableName: "human_category",
    timestamps: true
  });

  HumanCategory.associate = (models) => {
    HumanCategory.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
    HumanCategory.hasMany(models.Event, {
      foreignKey: "human_category_id",
      as: "events",
    });
  };
  return HumanCategory;
};
