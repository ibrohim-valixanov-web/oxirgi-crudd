module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    cart_id: {
      type: DataTypes.BIGINT
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    finished: {
      type: DataTypes.DATE
    },
    payment_method_id: {
      type: DataTypes.BIGINT
    },
    delivery_method_id: {
      type: DataTypes.BIGINT
    },
    discount_id: {
      type: DataTypes.BIGINT
    },
    status_id: {
      type: DataTypes.BIGINT
    },
  }, {
    tableName: "booking",
    timestamps: true
  });

  Booking.associate = (models) => {
    Booking.belongsTo(models.Cart, {
      foreignKey: "cart_id",
      as: "cart",
    });
    Booking.belongsTo(models.PaymentMethod, {
      foreignKey: "payment_method_id",
      as: "paymentMethod",
    });
    Booking.belongsTo(models.DeliveryMethod, {
      foreignKey: "delivery_method_id",
      as: "deliveryMethod",
    });
    Booking.belongsTo(models.Discount, {
      foreignKey: "discount_id",
      as: "discount",
    });
    Booking.belongsTo(models.TicketStatus, {
      foreignKey: "status_id",
      as: "status",
    });
  };
  return Booking;
};
