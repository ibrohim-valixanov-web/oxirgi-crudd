const Joi = require("joi");

const validateCustomerAddress = (data) => {
  const schema = Joi.object({
    customer_id: Joi.number().required(),
    name: Joi.string().required(),
    region_id: Joi.number().allow(null),
    district_id: Joi.number().allow(null),
    street: Joi.string().allow('', null),
    house: Joi.string().allow('', null),
    flat_id: Joi.number().allow(null),
    location: Joi.string().allow('', null),
    post_index: Joi.string().allow('', null),
    info: Joi.string().allow('', null),
  });

  return schema.validate(data);
};

const validateCustomerAddressUpdate = (data) => {
  const schema = Joi.object({
    customer_id: Joi.number(),
    name: Joi.string(),
    region_id: Joi.number().allow(null),
    district_id: Joi.number().allow(null),
    street: Joi.string().allow('', null),
    house: Joi.string().allow('', null),
    flat_id: Joi.number().allow(null),
    location: Joi.string().allow('', null),
    post_index: Joi.string().allow('', null),
    info: Joi.string().allow('', null),
  });

  return schema.validate(data);
};

module.exports = {
  validateCustomerAddress,
  validationCustomerAddress: validateCustomerAddress,
  validateCustomerAddressUpdate,
  validationCustomerAddressUpdate: validateCustomerAddressUpdate,
};
