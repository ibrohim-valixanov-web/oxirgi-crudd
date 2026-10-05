const Joi = require("joi");

const validateCartItem = (data) => {
  const schema = Joi.object({
    ticket_id: Joi.number().required(),
    cart_id: Joi.number().required(),
  });

  return schema.validate(data);
};

const validateCartItemUpdate = (data) => {
  const schema = Joi.object({
    ticket_id: Joi.number(),
    cart_id: Joi.number(),
  });

  return schema.validate(data);
};

module.exports = {
  validateCartItem,
  validationCartItem: validateCartItem,
  validateCartItemUpdate,
  validationCartItemUpdate: validateCartItemUpdate,
};
