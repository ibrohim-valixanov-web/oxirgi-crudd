const { Sector } = require("../models");
const { validationSector, validationSectorUpdate } = require("../validation/sectorValidation");
const { Op } = require("sequelize");

exports.CreateSector = async (req, res) => {
  const { error } = validationSector(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Sector.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSector = async (req, res) => {
  try {
    const items = await Sector.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSectorById = async (req, res) => {
  try {
    const item = await Sector.findByPk(req.params.id);
    if (!item) return res.status(404).send("Sector not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateSector = async (req, res) => {
  const { error } = validationSectorUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Sector.findByPk(req.params.id);
    if (!item) return res.status(404).send("Sector not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteSector = async (req, res) => {
  try {
    const item = await Sector.findByPk(req.params.id);
    if (!item) return res.status(404).send("Sector not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchSector = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Sector.findAll({
      where: {
        sector_name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

