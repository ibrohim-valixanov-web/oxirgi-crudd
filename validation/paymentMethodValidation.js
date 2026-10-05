const Joi = require("joi");

const validatePaymentMethod = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(data);
};

const validatePaymentMethodUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validatePaymentMethod,
  validationPaymentMethod: validatePaymentMethod,
  validatePaymentMethodUpdate,
  validationPaymentMethodUpdate: validatePaymentMethodUpdate,
};
