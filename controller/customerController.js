const { Customer, Gender, Lang } = require("../models");
const { validationCustomer, validationCustomerUpdate } = require("../validation/customerValidation");
const { Op } = require("sequelize");

exports.CreateCustomer = async (req, res) => {
  const { error } = validationCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Customer.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const items = await Customer.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const item = await Customer.findByPk(req.params.id, {
      include: [
        { model: Gender, as: "gender" },
        { model: Lang, as: "lang" }
      ]
    });
    if (!item) return res.status(404).send("Customer not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateCustomer = async (req, res) => {
  const { error } = validationCustomerUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Customer.findByPk(req.params.id);
    if (!item) return res.status(404).send("Customer not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteCustomer = async (req, res) => {
  try {
    const item = await Customer.findByPk(req.params.id);
    if (!item) return res.status(404).send("Customer not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchCustomer = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Customer.findAll({
      where: {
        first_name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

