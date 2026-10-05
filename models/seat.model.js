module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define("Seat", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    sector_id: {
      type: DataTypes.BIGINT
    },
    row_number: {
      type: DataTypes.INTEGER
    },
    number: {
      type: DataTypes.INTEGER
    },
    venue_id: {
      type: DataTypes.BIGINT
    },
    seat_type_id: {
      type: DataTypes.BIGINT
    },
    location_in_schema: {
      type: DataTypes.STRING
    },
  }, {
    tableName: "seat",
    timestamps: true
  });

  Seat.associate = (models) => {
    Seat.belongsTo(models.Sector, {
      foreignKey: "sector_id",
      as: "sector",
    });
    Seat.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    Seat.belongsTo(models.SeatType, {
      foreignKey: "seat_type_id",
      as: "seatType",
    });
    Seat.hasMany(models.Ticket, {
      foreignKey: "seat_id",
      as: "tickets",
    });
  };
  return Seat;
};
