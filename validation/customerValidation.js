const Joi = require("joi");

const validateCustomer = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    phone: Joi.string().required(),
    hashed_password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    birth_date: Joi.date().raw().allow(null),
    gender_id: Joi.number().allow(null),
    lang_id: Joi.number().allow(null),
    hashed_refresh_token: Joi.string().allow('', null),
  });

  return schema.validate(data);
};

const validateCustomerUpdate = (data) => {
  const schema = Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    phone: Joi.string(),
    hashed_password: Joi.string().min(6),
    email: Joi.string().email(),
    birth_date: Joi.date().raw().allow(null),
    gender_id: Joi.number().allow(null),
    lang_id: Joi.number().allow(null),
    hashed_refresh_token: Joi.string().allow('', null),
  });

  return schema.validate(data);
};

module.exports = {
  validateCustomer,
  validationCustomer: validateCustomer,
  validateCustomerUpdate,
  validationCustomerUpdate: validateCustomerUpdate,
};
