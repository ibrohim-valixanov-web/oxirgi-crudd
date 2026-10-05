module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define("Region", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
  }, {
    tableName: "region",
    timestamps: true
  });

  Region.associate = (models) => {
    Region.hasMany(models.District, {
      foreignKey: "region_id",
      as: "districts",
    });
    Region.hasMany(models.Venue, {
      foreignKey: "region_id",
      as: "venues",
    });
  };
  return Region;
};
