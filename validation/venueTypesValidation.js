const Joi = require("joi");

const validateVenueTypes = (data) => {
  const schema = Joi.object({
    venue_id: Joi.number().required(),
    type_id: Joi.number().required(),
  });

  return schema.validate(data);
};

const validateVenueTypesUpdate = (data) => {
  const schema = Joi.object({
    venue_id: Joi.number(),
    type_id: Joi.number(),
  });

  return schema.validate(data);
};

module.exports = {
  validateVenueTypes,
  validationVenueTypes: validateVenueTypes,
  validateVenueTypesUpdate,
  validationVenueTypesUpdate: validateVenueTypesUpdate,
};
