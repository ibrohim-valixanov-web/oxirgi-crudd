module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    site: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    schema: {
      type: DataTypes.TEXT
    },
    region_id: {
      type: DataTypes.BIGINT
    },
    district_id: {
      type: DataTypes.BIGINT
    },
  }, {
    tableName: "venue",
    timestamps: true
  });

  Venue.associate = (models) => {
    Venue.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
    Venue.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "district",
    });
    Venue.hasMany(models.VenuePhoto, {
      foreignKey: "venue_id",
      as: "photos",
    });
    Venue.hasMany(models.VenueTypes, {
      foreignKey: "venue_id",
      as: "venueTypes",
    });
    Venue.hasMany(models.Seat, {
      foreignKey: "venue_id",
      as: "seats",
    });
    Venue.hasMany(models.Event, {
      foreignKey: "venue_id",
      as: "events",
    });
  };
  return Venue;
};
