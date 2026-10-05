const { TicketType } = require("../models");
const { validationTicketType, validationTicketTypeUpdate } = require("../validation/ticketTypeValidation");
const { Op } = require("sequelize");

exports.CreateTicketType = async (req, res) => {
  const { error } = validationTicketType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await TicketType.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTicketType = async (req, res) => {
  try {
    const items = await TicketType.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTicketTypeById = async (req, res) => {
  try {
    const item = await TicketType.findByPk(req.params.id);
    if (!item) return res.status(404).send("TicketType not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateTicketType = async (req, res) => {
  const { error } = validationTicketTypeUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await TicketType.findByPk(req.params.id);
    if (!item) return res.status(404).send("TicketType not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteTicketType = async (req, res) => {
  try {
    const item = await TicketType.findByPk(req.params.id);
    if (!item) return res.status(404).send("TicketType not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchTicketType = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await TicketType.findAll({
      where: {
        ticket_type: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

