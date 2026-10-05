const Joi = require("joi");

const validateTypes = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateTypesUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateTypes,
  validationTypes: validateTypes,
  validateTypesUpdate,
  validationTypesUpdate: validateTypesUpdate,
};
