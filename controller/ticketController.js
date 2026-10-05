const { Ticket, Event, Seat, TicketStatus, TicketType } = require("../models");
const { validationTicket, validationTicketUpdate } = require("../validation/ticketValidation");
const { Op } = require("sequelize");

exports.CreateTicket = async (req, res) => {
  const { error } = validationTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Ticket.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTicket = async (req, res) => {
  try {
    const items = await Ticket.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const item = await Ticket.findByPk(req.params.id, {
      include: [
        { model: Event, as: "event" },
        { model: Seat, as: "seat" },
        { model: TicketStatus, as: "status" },
        { model: TicketType, as: "ticketType" }
      ]
    });
    if (!item) return res.status(404).send("Ticket not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateTicket = async (req, res) => {
  const { error } = validationTicketUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Ticket.findByPk(req.params.id);
    if (!item) return res.status(404).send("Ticket not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteTicket = async (req, res) => {
  try {
    const item = await Ticket.findByPk(req.params.id);
    if (!item) return res.status(404).send("Ticket not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

