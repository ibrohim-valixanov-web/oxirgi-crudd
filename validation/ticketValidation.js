const Joi = require("joi");

const validateTicket = (data) => {
  const schema = Joi.object({
    event_id: Joi.number().required(),
    seat_id: Joi.number().required(),
    price: Joi.number().precision(2).required(),
    service_fee: Joi.number().precision(2).default(0),
    status_id: Joi.number().allow(null),
    ticket_type_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

const validateTicketUpdate = (data) => {
  const schema = Joi.object({
    event_id: Joi.number(),
    seat_id: Joi.number(),
    price: Joi.number().precision(2),
    service_fee: Joi.number().precision(2),
    status_id: Joi.number().allow(null),
    ticket_type_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

module.exports = {
  validateTicket,
  validationTicket: validateTicket,
  validateTicketUpdate,
  validationTicketUpdate: validateTicketUpdate,
};
