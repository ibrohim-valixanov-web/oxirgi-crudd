const { Venue, Region, District } = require("../models");
const { validationVenue, validationVenueUpdate } = require("../validation/venueValidation");
const { Op } = require("sequelize");

exports.CreateVenue = async (req, res) => {
  const { error } = validationVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Venue.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVenue = async (req, res) => {
  try {
    const items = await Venue.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVenueById = async (req, res) => {
  try {
    const item = await Venue.findByPk(req.params.id, {
      include: [
        { model: Region, as: "region" },
        { model: District, as: "district" }
      ]
    });
    if (!item) return res.status(404).send("Venue not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateVenue = async (req, res) => {
  const { error } = validationVenueUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Venue.findByPk(req.params.id);
    if (!item) return res.status(404).send("Venue not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteVenue = async (req, res) => {
  try {
    const item = await Venue.findByPk(req.params.id);
    if (!item) return res.status(404).send("Venue not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchVenue = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await Venue.findAll({
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

