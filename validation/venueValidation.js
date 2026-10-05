const Joi = require("joi");

const validateVenue = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().allow('', null),
    location: Joi.string().allow('', null),
    site: Joi.string().allow('', null),
    phone: Joi.string().allow('', null),
    schema: Joi.string().allow('', null),
    region_id: Joi.number().allow(null),
    district_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

const validateVenueUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    address: Joi.string().allow('', null),
    location: Joi.string().allow('', null),
    site: Joi.string().allow('', null),
    phone: Joi.string().allow('', null),
    schema: Joi.string().allow('', null),
    region_id: Joi.number().allow(null),
    district_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

module.exports = {
  validateVenue,
  validationVenue: validateVenue,
  validateVenueUpdate,
  validationVenueUpdate: validateVenueUpdate,
};
