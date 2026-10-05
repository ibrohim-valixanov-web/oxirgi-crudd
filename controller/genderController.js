const { Gender } = require("../models");
const { validationGender, validationGenderUpdate } = require("../validation/genderValidation");
const { Op } = require("sequelize");

exports.CreateGender = async (req, res) => {
  const { error } = validationGender(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Gender.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getGender = async (req, res) => {
  try {
    const items = await Gender.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getGenderById = async (req, res) => {
  try {
    const item = await Gender.findByPk(req.params.id);
    if (!item) return res.status(404).send("Gender not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateGender = async (req, res) => {
  const { error } = validationGenderUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Gender.findByPk(req.params.id);
    if (!item) return res.status(404).send("Gender not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteGender = async (req, res) => {
  try {
    const item = await Gender.findByPk(req.params.id);
    if (!item) return res.status(404).send("Gender not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchGender = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Gender.findAll({
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

