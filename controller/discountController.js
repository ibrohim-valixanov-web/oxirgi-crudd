const { Discount } = require("../models");
const { validationDiscount, validationDiscountUpdate } = require("../validation/discountValidation");
const { Op } = require("sequelize");

exports.CreateDiscount = async (req, res) => {
  const { error } = validationDiscount(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Discount.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDiscount = async (req, res) => {
  try {
    const items = await Discount.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDiscountById = async (req, res) => {
  try {
    const item = await Discount.findByPk(req.params.id);
    if (!item) return res.status(404).send("Discount not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateDiscount = async (req, res) => {
  const { error } = validationDiscountUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Discount.findByPk(req.params.id);
    if (!item) return res.status(404).send("Discount not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteDiscount = async (req, res) => {
  try {
    const item = await Discount.findByPk(req.params.id);
    if (!item) return res.status(404).send("Discount not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchDiscount = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Discount.findAll({
      where: {
        discount: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

