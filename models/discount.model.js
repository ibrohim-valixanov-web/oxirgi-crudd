module.exports = (sequelize, DataTypes) => {
  const Discount = sequelize.define("Discount", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    discount: {
      type: DataTypes.STRING
    },
    finish_date: {
      type: DataTypes.DATEONLY
    },
  }, {
    tableName: "discount",
    timestamps: true
  });

  Discount.associate = (models) => {
    Discount.hasMany(models.Booking, {
      foreignKey: "discount_id",
      as: "bookings",
    });
  };
  return Discount;
};
