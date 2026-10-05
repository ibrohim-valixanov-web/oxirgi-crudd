const { VenueTypes, Venue, Types } = require("../models");
const { validationVenueTypes, validationVenueTypesUpdate } = require("../validation/venueTypesValidation");
const { Op } = require("sequelize");

exports.CreateVenueTypes = async (req, res) => {
  const { error } = validationVenueTypes(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await VenueTypes.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVenueTypes = async (req, res) => {
  try {
    const items = await VenueTypes.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVenueTypesById = async (req, res) => {
  try {
    const item = await VenueTypes.findByPk(req.params.id, {
      include: [
        { model: Venue, as: "venue" },
        { model: Types, as: "type" }
      ]
    });
    if (!item) return res.status(404).send("VenueTypes not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateVenueTypes = async (req, res) => {
  const { error } = validationVenueTypesUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await VenueTypes.findByPk(req.params.id);
    if (!item) return res.status(404).send("VenueTypes not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteVenueTypes = async (req, res) => {
  try {
    const item = await VenueTypes.findByPk(req.params.id);
    if (!item) return res.status(404).send("VenueTypes not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

