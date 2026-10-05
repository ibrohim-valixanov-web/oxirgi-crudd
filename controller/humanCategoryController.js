const { HumanCategory, Gender } = require("../models");
const { validationHumanCategory, validationHumanCategoryUpdate } = require("../validation/humanCategoryValidation");
const { Op } = require("sequelize");

exports.CreateHumanCategory = async (req, res) => {
  const { error } = validationHumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await HumanCategory.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getHumanCategory = async (req, res) => {
  try {
    const items = await HumanCategory.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getHumanCategoryById = async (req, res) => {
  try {
    const item = await HumanCategory.findByPk(req.params.id, {
      include: [
        { model: Gender, as: "gender" }
      ]
    });
    if (!item) return res.status(404).send("HumanCategory not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateHumanCategory = async (req, res) => {
  const { error } = validationHumanCategoryUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await HumanCategory.findByPk(req.params.id);
    if (!item) return res.status(404).send("HumanCategory not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteHumanCategory = async (req, res) => {
  try {
    const item = await HumanCategory.findByPk(req.params.id);
    if (!item) return res.status(404).send("HumanCategory not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchHumanCategory = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await HumanCategory.findAll({
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

