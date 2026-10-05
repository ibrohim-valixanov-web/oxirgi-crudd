const { Event, EventType, HumanCategory, Venue, Lang } = require("../models");
const { validationEvent, validationEventUpdate } = require("../validation/eventValidation");
const { Op } = require("sequelize");

exports.CreateEvent = async (req, res) => {
  const { error } = validationEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Event.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getEvent = async (req, res) => {
  try {
    const items = await Event.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const item = await Event.findByPk(req.params.id, {
      include: [
        { model: EventType, as: "eventType" },
        { model: HumanCategory, as: "humanCategory" },
        { model: Venue, as: "venue" },
        { model: Lang, as: "lang" }
      ]
    });
    if (!item) return res.status(404).send("Event not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateEvent = async (req, res) => {
  const { error } = validationEventUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Event.findByPk(req.params.id);
    if (!item) return res.status(404).send("Event not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteEvent = async (req, res) => {
  try {
    const item = await Event.findByPk(req.params.id);
    if (!item) return res.status(404).send("Event not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchEvent = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Event.findAll({
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

