const { User, Customer } = require("../models");
const { validationUser, validationUserUpdate } = require("../validation/userValidation");
const { Op } = require("sequelize");

exports.CreateUser = async (req, res) => {
  const { error } = validationUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await User.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const items = await User.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const item = await User.findByPk(req.params.id, {
      include: [
        { model: Customer, as: "customer" }
      ]
    });
    if (!item) return res.status(404).send("User not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateUser = async (req, res) => {
  const { error } = validationUserUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await User.findByPk(req.params.id);
    if (!item) return res.status(404).send("User not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteUser = async (req, res) => {
  try {
    const item = await User.findByPk(req.params.id);
    if (!item) return res.status(404).send("User not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchUser = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await User.findAll({
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

