const { VenuePhoto, Venue } = require("../models");
const { validationVenuePhoto, validationVenuePhotoUpdate } = require("../validation/venuePhotoValidation");
const { Op } = require("sequelize");

exports.CreateVenuePhoto = async (req, res) => {
  const { error } = validationVenuePhoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await VenuePhoto.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVenuePhoto = async (req, res) => {
  try {
    const items = await VenuePhoto.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVenuePhotoById = async (req, res) => {
  try {
    const item = await VenuePhoto.findByPk(req.params.id, {
      include: [
        { model: Venue, as: "venue" }
      ]
    });
    if (!item) return res.status(404).send("VenuePhoto not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateVenuePhoto = async (req, res) => {
  const { error } = validationVenuePhotoUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await VenuePhoto.findByPk(req.params.id);
    if (!item) return res.status(404).send("VenuePhoto not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteVenuePhoto = async (req, res) => {
  try {
    const item = await VenuePhoto.findByPk(req.params.id);
    if (!item) return res.status(404).send("VenuePhoto not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchVenuePhoto = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query is required");
    }
    const items = await VenuePhoto.findAll({
      where: {
        url: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

