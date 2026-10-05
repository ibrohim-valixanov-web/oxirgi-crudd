const { TicketStatus } = require("../models");
const { validationTicketStatus, validationTicketStatusUpdate } = require("../validation/ticketStatusValidation");
const { Op } = require("sequelize");

exports.CreateTicketStatus = async (req, res) => {
  const { error } = validationTicketStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await TicketStatus.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTicketStatus = async (req, res) => {
  try {
    const items = await TicketStatus.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTicketStatusById = async (req, res) => {
  try {
    const item = await TicketStatus.findByPk(req.params.id);
    if (!item) return res.status(404).send("TicketStatus not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateTicketStatus = async (req, res) => {
  const { error } = validationTicketStatusUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await TicketStatus.findByPk(req.params.id);
    if (!item) return res.status(404).send("TicketStatus not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteTicketStatus = async (req, res) => {
  try {
    const item = await TicketStatus.findByPk(req.params.id);
    if (!item) return res.status(404).send("TicketStatus not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchTicketStatus = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await TicketStatus.findAll({
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

