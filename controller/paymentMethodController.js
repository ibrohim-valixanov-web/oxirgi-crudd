const { PaymentMethod } = require("../models");
const { validationPaymentMethod, validationPaymentMethodUpdate } = require("../validation/paymentMethodValidation");
const { Op } = require("sequelize");

exports.CreatePaymentMethod = async (req, res) => {
  const { error } = validationPaymentMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await PaymentMethod.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPaymentMethod = async (req, res) => {
  try {
    const items = await PaymentMethod.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPaymentMethodById = async (req, res) => {
  try {
    const item = await PaymentMethod.findByPk(req.params.id);
    if (!item) return res.status(404).send("PaymentMethod not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdatePaymentMethod = async (req, res) => {
  const { error } = validationPaymentMethodUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await PaymentMethod.findByPk(req.params.id);
    if (!item) return res.status(404).send("PaymentMethod not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeletePaymentMethod = async (req, res) => {
  try {
    const item = await PaymentMethod.findByPk(req.params.id);
    if (!item) return res.status(404).send("PaymentMethod not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchPaymentMethod = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await PaymentMethod.findAll({
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

