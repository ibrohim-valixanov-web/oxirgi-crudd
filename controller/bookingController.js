const { Booking, Cart, PaymentMethod, DeliveryMethod, Discount, TicketStatus } = require("../models");
const { validationBooking, validationBookingUpdate } = require("../validation/bookingValidation");
const { Op } = require("sequelize");

exports.CreateBooking = async (req, res) => {
  const { error } = validationBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Booking.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBooking = async (req, res) => {
  try {
    const items = await Booking.findAll({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const item = await Booking.findByPk(req.params.id, {
      include: [
        { model: Cart, as: "cart" },
        { model: PaymentMethod, as: "paymentMethod" },
        { model: DeliveryMethod, as: "deliveryMethod" },
        { model: Discount, as: "discount" },
        { model: TicketStatus, as: "status" }
      ]
    });
    if (!item) return res.status(404).send("Booking not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.UpdateBooking = async (req, res) => {
  const { error } = validationBookingUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Booking.findByPk(req.params.id);
    if (!item) return res.status(404).send("Booking not found");
    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.DeleteBooking = async (req, res) => {
  try {
    const item = await Booking.findByPk(req.params.id);
    if (!item) return res.status(404).send("Booking not found");

    const itemData = item.toJSON();
    await item.destroy();
    res.status(200).send(itemData);
  } catch (error) {
    res.status(500).send(error);
  }
};

