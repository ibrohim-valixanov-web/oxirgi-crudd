const Joi = require("joi");

const validateUser = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    customer_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

const validateUserUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    customer_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

module.exports = {
  validateUser,
  validationUser: validateUser,
  validateUserUpdate,
  validationUserUpdate: validateUserUpdate,
};
