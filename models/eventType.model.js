module.exports = (sequelize, DataTypes) => {
  const EventType = sequelize.define("EventType", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
    parent_event_type_id: {
      type: DataTypes.BIGINT
    },
  }, {
    tableName: "event_type",
    timestamps: true
  });

  EventType.associate = (models) => {
    EventType.belongsTo(models.EventType, {
      foreignKey: "parent_event_type_id",
      as: "parentType",
    });
    EventType.hasMany(models.Event, {
      foreignKey: "event_type_id",
      as: "events",
    });
  };
  return EventType;
};
