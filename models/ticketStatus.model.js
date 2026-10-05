module.exports = (sequelize, DataTypes) => {
  const TicketStatus = sequelize.define("TicketStatus", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
  }, {
    tableName: "ticket_status",
    timestamps: true
  });

  TicketStatus.associate = (models) => {
    TicketStatus.hasMany(models.Ticket, {
      foreignKey: "status_id",
      as: "tickets",
    });
    TicketStatus.hasMany(models.Booking, {
      foreignKey: "status_id",
      as: "bookings",
    });
  };
  return TicketStatus;
};
