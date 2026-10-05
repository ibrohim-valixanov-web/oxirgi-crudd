module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("Ticket", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.BIGINT
    },
    seat_id: {
      type: DataTypes.BIGINT
    },
    price: {
      type: DataTypes.DECIMAL(10, 2)
    },
    service_fee: {
      type: DataTypes.DECIMAL(10, 2)
    },
    status_id: {
      type: DataTypes.BIGINT
    },
    ticket_type_id: {
      type: DataTypes.BIGINT
    },
  }, {
    tableName: "ticket",
    timestamps: true
  });

  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Event, {
      foreignKey: "event_id",
      as: "event",
    });
    Ticket.belongsTo(models.Seat, {
      foreignKey: "seat_id",
      as: "seat",
    });
    Ticket.belongsTo(models.TicketStatus, {
      foreignKey: "status_id",
      as: "status",
    });
    Ticket.belongsTo(models.TicketType, {
      foreignKey: "ticket_type_id",
      as: "ticketType",
    });
    Ticket.hasMany(models.CartItem, {
      foreignKey: "ticket_id",
      as: "cartItems",
    });
  };
  return Ticket;
};
