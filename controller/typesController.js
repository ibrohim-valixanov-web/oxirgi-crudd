const { Types } = require("../models");
const { validationTypes, validationTypesUpdate } = require("../validation/typesValidation");
const { Op } = require("sequelize");

exports.CreateTypes = async (req, res) => {
  const { error } = validationTypes(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Types.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTypes = async (req, res) => {
  try {
    const items = await Types.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTypesById = async (req, res) => {
  try {
    const item = await Types.findByPk(req.params.id);
    if (!item) return res.status(404).send("Types not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateTypes = async (req, res) => {
  const { error } = validationTypesUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Types.findByPk(req.params.id);
    if (!item) return res.status(404).send("Types not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteTypes = async (req, res) => {
  try {
    const item = await Types.findByPk(req.params.id);
    if (!item) return res.status(404).send("Types not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchTypes = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Types.findAll({
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

