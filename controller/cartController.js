const { Cart, Customer } = require("../models");
const { validationCart, validationCartUpdate } = require("../validation/cartValidation");
const { Op } = require("sequelize");

exports.CreateCart = async (req, res) => {
  const { error } = validationCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Cart.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCart = async (req, res) => {
  try {
    const items = await Cart.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCartById = async (req, res) => {
  try {
    const item = await Cart.findByPk(req.params.id, {
      include: [
        { model: Customer, as: "customer" }
      ]
    });
    if (!item) return res.status(404).send("Cart not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateCart = async (req, res) => {
  const { error } = validationCartUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Cart.findByPk(req.params.id);
    if (!item) return res.status(404).send("Cart not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteCart = async (req, res) => {
  try {
    const item = await Cart.findByPk(req.params.id);
    if (!item) return res.status(404).send("Cart not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

