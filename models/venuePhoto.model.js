module.exports = (sequelize, DataTypes) => {
  const VenuePhoto = sequelize.define("VenuePhoto", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    venue_id: {
      type: DataTypes.BIGINT
    },
    url: {
      type: DataTypes.STRING
    },
  }, {
    tableName: "venue_photo",
    timestamps: true
  });

  VenuePhoto.associate = (models) => {
    VenuePhoto.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
  };
  return VenuePhoto;
};
