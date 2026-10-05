const Joi = require("joi");

const validateSeatType = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateSeatTypeUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateSeatType,
  validationSeatType: validateSeatType,
  validateSeatTypeUpdate,
  validationSeatTypeUpdate: validateSeatTypeUpdate,
};
