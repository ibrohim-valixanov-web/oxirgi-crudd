const { DeliveryMethod } = require("../models");
const { validationDeliveryMethod, validationDeliveryMethodUpdate } = require("../validation/deliveryMethodValidation");
const { Op } = require("sequelize");

exports.CreateDeliveryMethod = async (req, res) => {
  const { error } = validationDeliveryMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await DeliveryMethod.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDeliveryMethod = async (req, res) => {
  try {
    const items = await DeliveryMethod.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDeliveryMethodById = async (req, res) => {
  try {
    const item = await DeliveryMethod.findByPk(req.params.id);
    if (!item) return res.status(404).send("DeliveryMethod not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateDeliveryMethod = async (req, res) => {
  const { error } = validationDeliveryMethodUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await DeliveryMethod.findByPk(req.params.id);
    if (!item) return res.status(404).send("DeliveryMethod not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteDeliveryMethod = async (req, res) => {
  try {
    const item = await DeliveryMethod.findByPk(req.params.id);
    if (!item) return res.status(404).send("DeliveryMethod not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchDeliveryMethod = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await DeliveryMethod.findAll({
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

