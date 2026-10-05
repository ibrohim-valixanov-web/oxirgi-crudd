module.exports = (sequelize, DataTypes) => {
  const Types = sequelize.define("Types", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
  }, {
    tableName: "types",
    timestamps: true
  });

  Types.associate = (models) => {
    Types.hasMany(models.VenueTypes, {
      foreignKey: "type_id",
      as: "venueTypes",
    });
  };
  return Types;
};
