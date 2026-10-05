module.exports = (sequelize, DataTypes) => {
  const VenueTypes = sequelize.define("VenueTypes", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    venue_id: {
      type: DataTypes.BIGINT
    },
    type_id: {
      type: DataTypes.BIGINT
    },
  }, {
    tableName: "venue_types",
    timestamps: true
  });

  VenueTypes.associate = (models) => {
    VenueTypes.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    VenueTypes.belongsTo(models.Types, {
      foreignKey: "type_id",
      as: "type",
    });
  };
  return VenueTypes;
};
