const { SeatType } = require("../models");
const { validationSeatType, validationSeatTypeUpdate } = require("../validation/seatTypeValidation");
const { Op } = require("sequelize");

exports.CreateSeatType = async (req, res) => {
  const { error } = validationSeatType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await SeatType.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSeatType = async (req, res) => {
  try {
    const items = await SeatType.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSeatTypeById = async (req, res) => {
  try {
    const item = await SeatType.findByPk(req.params.id);
    if (!item) return res.status(404).send("SeatType not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateSeatType = async (req, res) => {
  const { error } = validationSeatTypeUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await SeatType.findByPk(req.params.id);
    if (!item) return res.status(404).send("SeatType not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteSeatType = async (req, res) => {
  try {
    const item = await SeatType.findByPk(req.params.id);
    if (!item) return res.status(404).send("SeatType not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchSeatType = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await SeatType.findAll({
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

