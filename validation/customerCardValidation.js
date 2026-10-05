const Joi = require("joi");

const validateCustomerCard = (data) => {
  const schema = Joi.object({
    customer_id: Joi.number().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    number: Joi.string().required(),
    year: Joi.string().required(),
    month: Joi.string().required(),
    is_active: Joi.boolean().default(true),
    is_main: Joi.boolean().default(false),
  });

  return schema.validate(data);
};

const validateCustomerCardUpdate = (data) => {
  const schema = Joi.object({
    customer_id: Joi.number(),
    name: Joi.string(),
    phone: Joi.string(),
    number: Joi.string(),
    year: Joi.string(),
    month: Joi.string(),
    is_active: Joi.boolean(),
    is_main: Joi.boolean(),
  });

  return schema.validate(data);
};

module.exports = {
  validateCustomerCard,
  validationCustomerCard: validateCustomerCard,
  validateCustomerCardUpdate,
  validationCustomerCardUpdate: validateCustomerCardUpdate,
};
