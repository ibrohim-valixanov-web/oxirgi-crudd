module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING
    },
    start_date: {
      type: DataTypes.DATEONLY
    },
    start_time: {
      type: DataTypes.STRING
    },
    finish_date: {
      type: DataTypes.DATEONLY
    },
    finish_time: {
      type: DataTypes.STRING
    },
    info: {
      type: DataTypes.TEXT
    },
    event_type_id: {
      type: DataTypes.BIGINT
    },
    human_category_id: {
      type: DataTypes.BIGINT
    },
    venue_id: {
      type: DataTypes.BIGINT
    },
    lang_id: {
      type: DataTypes.BIGINT
    },
    release_date: {
      type: DataTypes.DATEONLY
    },
  }, {
    tableName: "event",
    timestamps: true
  });

  Event.associate = (models) => {
    Event.belongsTo(models.EventType, {
      foreignKey: "event_type_id",
      as: "eventType",
    });
    Event.belongsTo(models.HumanCategory, {
      foreignKey: "human_category_id",
      as: "humanCategory",
    });
    Event.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    Event.belongsTo(models.Lang, {
      foreignKey: "lang_id",
      as: "lang",
    });
    Event.hasMany(models.Ticket, {
      foreignKey: "event_id",
      as: "tickets",
    });
  };
  return Event;
};
