const { Lang } = require("../models");
const { validationLang, validationLangUpdate } = require("../validation/langValidation");
const { Op } = require("sequelize");

exports.CreateLang = async (req, res) => {
  const { error } = validationLang(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Lang.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getLang = async (req, res) => {
  try {
    const items = await Lang.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getLangById = async (req, res) => {
  try {
    const item = await Lang.findByPk(req.params.id);
    if (!item) return res.status(404).send("Lang not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateLang = async (req, res) => {
  const { error } = validationLangUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Lang.findByPk(req.params.id);
    if (!item) return res.status(404).send("Lang not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteLang = async (req, res) => {
  try {
    const item = await Lang.findByPk(req.params.id);
    if (!item) return res.status(404).send("Lang not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchLang = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Lang.findAll({
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

