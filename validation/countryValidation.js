const Joi = require("joi");

const validateCountry = (data) => {
  const schema = Joi.object({
    country_name: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateCountryUpdate = (data) => {
  const schema = Joi.object({
    country_name: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateCountry,
  validationCountry: validateCountry,
  validateCountryUpdate,
  validationCountryUpdate: validateCountryUpdate,
};
