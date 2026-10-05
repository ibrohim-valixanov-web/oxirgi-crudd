const Joi = require("joi");

const validateTicketStatus = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateTicketStatusUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateTicketStatus,
  validationTicketStatus: validateTicketStatus,
  validateTicketStatusUpdate,
  validationTicketStatusUpdate: validateTicketStatusUpdate,
};
