const Joi = require("joi");

const validateBooking = (data) => {
  const schema = Joi.object({
    cart_id: Joi.number().required(),
    createdAt: Joi.date().raw().allow(null),
    finished: Joi.date().raw().allow(null),
    payment_method_id: Joi.number().allow(null),
    delivery_method_id: Joi.number().allow(null),
    discount_id: Joi.number().allow(null),
    status_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

const validateBookingUpdate = (data) => {
  const schema = Joi.object({
    cart_id: Joi.number(),
    createdAt: Joi.date().raw().allow(null),
    finished: Joi.date().raw().allow(null),
    payment_method_id: Joi.number().allow(null),
    delivery_method_id: Joi.number().allow(null),
    discount_id: Joi.number().allow(null),
    status_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

module.exports = {
  validateBooking,
  validationBooking: validateBooking,
  validateBookingUpdate,
  validationBookingUpdate: validateBookingUpdate,
};
