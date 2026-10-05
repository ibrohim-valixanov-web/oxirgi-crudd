const Joi = require("joi");

const validateVenuePhoto = (data) => {
  const schema = Joi.object({
    venue_id: Joi.number().required(),
    url: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateVenuePhotoUpdate = (data) => {
  const schema = Joi.object({
    venue_id: Joi.number(),
    url: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateVenuePhoto,
  validationVenuePhoto: validateVenuePhoto,
  validateVenuePhotoUpdate,
  validationVenuePhotoUpdate: validateVenuePhotoUpdate,
};
