const Joi = require("joi");

const validateCart = (data) => {
  const schema = Joi.object({
    customer_id: Joi.number().required(),
    createdAt: Joi.date().raw().allow(null),
    finishedAt: Joi.date().raw().allow(null),
    status_id: Joi.number().default(1),
  });

  return schema.validate(data);
};

const validateCartUpdate = (data) => {
  const schema = Joi.object({
    customer_id: Joi.number(),
    createdAt: Joi.date().raw().allow(null),
    finishedAt: Joi.date().raw().allow(null),
    status_id: Joi.number(),
  });

  return schema.validate(data);
};

module.exports = {
  validateCart,
  validationCart: validateCart,
  validateCartUpdate,
  validationCartUpdate: validateCartUpdate,
};
