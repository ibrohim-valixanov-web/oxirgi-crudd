const Joi = require("joi");

const validateFlat = (data) => {
  const schema = Joi.object({
    etaj: Joi.number().required(),
    condition: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateFlatUpdate = (data) => {
  const schema = Joi.object({
    etaj: Joi.number(),
    condition: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateFlat,
  validationFlat: validateFlat,
  validateFlatUpdate,
  validationFlatUpdate: validateFlatUpdate,
};
