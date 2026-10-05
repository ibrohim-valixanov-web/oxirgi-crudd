const Joi = require("joi");

const validateSeat = (data) => {
  const schema = Joi.object({
    sector_id: Joi.number().allow(null),
    row_number: Joi.number().required(),
    number: Joi.number().required(),
    venue_id: Joi.number().required(),
    seat_type_id: Joi.number().allow(null),
    location_in_schema: Joi.string().allow('', null),
  });

  return schema.validate(data);
};

const validateSeatUpdate = (data) => {
  const schema = Joi.object({
    sector_id: Joi.number().allow(null),
    row_number: Joi.number(),
    number: Joi.number(),
    venue_id: Joi.number(),
    seat_type_id: Joi.number().allow(null),
    location_in_schema: Joi.string().allow('', null),
  });

  return schema.validate(data);
};

module.exports = {
  validateSeat,
  validationSeat: validateSeat,
  validateSeatUpdate,
  validationSeatUpdate: validateSeatUpdate,
};
