const Joi = require("joi");

const validateRegion = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateRegionUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateRegion,
  validationRegion: validateRegion,
  validateRegionUpdate,
  validationRegionUpdate: validateRegionUpdate,
};
