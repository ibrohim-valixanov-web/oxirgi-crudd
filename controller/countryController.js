const { Country } = require("../models");
const { validationCountry, validationCountryUpdate } = require("../validation/countryValidation");
const { Op } = require("sequelize");

exports.CreateCountry = async (req, res) => {
  const { error } = validationCountry(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Country.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCountry = async (req, res) => {
  try {
    const items = await Country.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCountryById = async (req, res) => {
  try {
    const item = await Country.findByPk(req.params.id);
    if (!item) return res.status(404).send("Country not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateCountry = async (req, res) => {
  const { error } = validationCountryUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Country.findByPk(req.params.id);
    if (!item) return res.status(404).send("Country not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteCountry = async (req, res) => {
  try {
    const item = await Country.findByPk(req.params.id);
    if (!item) return res.status(404).send("Country not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchCountry = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Country.findAll({
      where: {
        country_name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

