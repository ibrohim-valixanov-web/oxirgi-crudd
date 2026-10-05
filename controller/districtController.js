const { District, Region } = require("../models");
const { validationDistrict, validationDistrictUpdate } = require("../validation/districtValidation");
const { Op } = require("sequelize");

exports.CreateDistrict = async (req, res) => {
  const { error } = validationDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await District.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDistrict = async (req, res) => {
  try {
    const items = await District.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDistrictById = async (req, res) => {
  try {
    const item = await District.findByPk(req.params.id, {
      include: [
        { model: Region, as: "region" }
      ]
    });
    if (!item) return res.status(404).send("District not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateDistrict = async (req, res) => {
  const { error } = validationDistrictUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await District.findByPk(req.params.id);
    if (!item) return res.status(404).send("District not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteDistrict = async (req, res) => {
  try {
    const item = await District.findByPk(req.params.id);
    if (!item) return res.status(404).send("District not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchDistrict = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await District.findAll({
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

