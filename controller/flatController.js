const { Flat } = require("../models");
const { validationFlat, validationFlatUpdate } = require("../validation/flatValidation");
const { Op } = require("sequelize");

exports.CreateFlat = async (req, res) => {
  const { error } = validationFlat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Flat.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getFlat = async (req, res) => {
  try {
    const items = await Flat.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getFlatById = async (req, res) => {
  try {
    const item = await Flat.findByPk(req.params.id);
    if (!item) return res.status(404).send("Flat not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateFlat = async (req, res) => {
  const { error } = validationFlatUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Flat.findByPk(req.params.id);
    if (!item) return res.status(404).send("Flat not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteFlat = async (req, res) => {
  try {
    const item = await Flat.findByPk(req.params.id);
    if (!item) return res.status(404).send("Flat not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchFlat = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Flat.findAll({
      where: {
        condition: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

