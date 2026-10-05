const { CustomerCard, Customer } = require("../models");
const { validationCustomerCard, validationCustomerCardUpdate } = require("../validation/customerCardValidation");
const { Op } = require("sequelize");

exports.CreateCustomerCard = async (req, res) => {
  const { error } = validationCustomerCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await CustomerCard.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomerCard = async (req, res) => {
  try {
    const items = await CustomerCard.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomerCardById = async (req, res) => {
  try {
    const item = await CustomerCard.findByPk(req.params.id, {
      include: [
        { model: Customer, as: "customer" }
      ]
    });
    if (!item) return res.status(404).send("CustomerCard not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateCustomerCard = async (req, res) => {
  const { error } = validationCustomerCardUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await CustomerCard.findByPk(req.params.id);
    if (!item) return res.status(404).send("CustomerCard not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteCustomerCard = async (req, res) => {
  try {
    const item = await CustomerCard.findByPk(req.params.id);
    if (!item) return res.status(404).send("CustomerCard not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchCustomerCard = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await CustomerCard.findAll({
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

