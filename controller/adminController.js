const { Admin } = require("../models");
const { validationAdmin, validationAdminUpdate } = require("../validation/adminValidation");
const { Op } = require("sequelize");

exports.CreateAdmin = async (req, res) => {
  const { error } = validationAdmin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Admin.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAdmin = async (req, res) => {
  try {
    const items = await Admin.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const item = await Admin.findByPk(req.params.id);
    if (!item) return res.status(404).send("Admin not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateAdmin = async (req, res) => {
  const { error } = validationAdminUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Admin.findByPk(req.params.id);
    if (!item) return res.status(404).send("Admin not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteAdmin = async (req, res) => {
  try {
    const item = await Admin.findByPk(req.params.id);
    if (!item) return res.status(404).send("Admin not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchAdmin = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Admin.findAll({
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

