const { Region } = require("../models");
const { validationRegion, validationRegionUpdate } = require("../validation/regionValidation");
const { Op } = require("sequelize");

exports.CreateRegion = async (req, res) => {
  const { error } = validationRegion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Region.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getRegion = async (req, res) => {
  try {
    const items = await Region.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getRegionById = async (req, res) => {
  try {
    const item = await Region.findByPk(req.params.id);
    if (!item) return res.status(404).send("Region not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateRegion = async (req, res) => {
  const { error } = validationRegionUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Region.findByPk(req.params.id);
    if (!item) return res.status(404).send("Region not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteRegion = async (req, res) => {
  try {
    const item = await Region.findByPk(req.params.id);
    if (!item) return res.status(404).send("Region not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchRegion = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Region.findAll({
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

