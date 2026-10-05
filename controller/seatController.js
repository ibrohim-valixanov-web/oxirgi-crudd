const { Seat, Sector, Venue, SeatType } = require("../models");
const { validationSeat, validationSeatUpdate } = require("../validation/seatValidation");
const { Op } = require("sequelize");

exports.CreateSeat = async (req, res) => {
  const { error } = validationSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Seat.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSeat = async (req, res) => {
  try {
    const items = await Seat.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSeatById = async (req, res) => {
  try {
    const item = await Seat.findByPk(req.params.id, {
      include: [
        { model: Sector, as: "sector" },
        { model: Venue, as: "venue" },
        { model: SeatType, as: "seatType" }
      ]
    });
    if (!item) return res.status(404).send("Seat not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateSeat = async (req, res) => {
  const { error } = validationSeatUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Seat.findByPk(req.params.id);
    if (!item) return res.status(404).send("Seat not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteSeat = async (req, res) => {
  try {
    const item = await Seat.findByPk(req.params.id);
    if (!item) return res.status(404).send("Seat not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

