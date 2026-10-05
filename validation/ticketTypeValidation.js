const Joi = require("joi");

const validateTicketType = (data) => {
  const schema = Joi.object({
    ticket_type: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateTicketTypeUpdate = (data) => {
  const schema = Joi.object({
    ticket_type: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateTicketType,
  validationTicketType: validateTicketType,
  validateTicketTypeUpdate,
  validationTicketTypeUpdate: validateTicketTypeUpdate,
};
