const { EventType } = require("../models");
const { validationEventType, validationEventTypeUpdate } = require("../validation/eventTypeValidation");
const { Op } = require("sequelize");

exports.CreateEventType = async (req, res) => {
  const { error } = validationEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await EventType.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getEventType = async (req, res) => {
  try {
    const items = await EventType.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getEventTypeById = async (req, res) => {
  try {
    const item = await EventType.findByPk(req.params.id, {
      include: [
        { model: EventType, as: "parentType" }
      ]
    });
    if (!item) return res.status(404).send("EventType not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateEventType = async (req, res) => {
  const { error } = validationEventTypeUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await EventType.findByPk(req.params.id);
    if (!item) return res.status(404).send("EventType not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteEventType = async (req, res) => {
  try {
    const item = await EventType.findByPk(req.params.id);
    if (!item) return res.status(404).send("EventType not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchEventType = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await EventType.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

