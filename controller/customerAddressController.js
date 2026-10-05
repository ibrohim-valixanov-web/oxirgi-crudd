const { CustomerAddress, Customer, Region, District, Flat } = require("../models");
const { validationCustomerAddress, validationCustomerAddressUpdate } = require("../validation/customerAddressValidation");
const { Op } = require("sequelize");

exports.CreateCustomerAddress = async (req, res) => {
  const { error } = validationCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await CustomerAddress.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomerAddress = async (req, res) => {
  try {
    const items = await CustomerAddress.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomerAddressById = async (req, res) => {
  try {
    const item = await CustomerAddress.findByPk(req.params.id, {
      include: [
        { model: Customer, as: "customer" },
        { model: Region, as: "region" },
        { model: District, as: "district" },
        { model: Flat, as: "flat" }
      ]
    });
    if (!item) return res.status(404).send("CustomerAddress not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateCustomerAddress = async (req, res) => {
  const { error } = validationCustomerAddressUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await CustomerAddress.findByPk(req.params.id);
    if (!item) return res.status(404).send("CustomerAddress not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteCustomerAddress = async (req, res) => {
  try {
    const item = await CustomerAddress.findByPk(req.params.id);
    if (!item) return res.status(404).send("CustomerAddress not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchCustomerAddress = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await CustomerAddress.findAll({
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

