const Joi = require("joi");

const validateSector = (data) => {
  const schema = Joi.object({
    sector_name: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateSectorUpdate = (data) => {
  const schema = Joi.object({
    sector_name: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateSector,
  validationSector: validateSector,
  validateSectorUpdate,
  validationSectorUpdate: validateSectorUpdate,
};
