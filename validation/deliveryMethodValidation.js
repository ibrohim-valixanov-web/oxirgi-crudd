const Joi = require("joi");

const validateDeliveryMethod = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateDeliveryMethodUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateDeliveryMethod,
  validationDeliveryMethod: validateDeliveryMethod,
  validateDeliveryMethodUpdate,
  validationDeliveryMethodUpdate: validateDeliveryMethodUpdate,
};
