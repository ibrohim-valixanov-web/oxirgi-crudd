const Joi = require("joi");

const validateDistrict = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    region_id: Joi.number().required(),
  });

  return schema.validate(data);
};

const validateDistrictUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    region_id: Joi.number(),
  });

  return schema.validate(data);
};

module.exports = {
  validateDistrict,
  validationDistrict: validateDistrict,
  validateDistrictUpdate,
  validationDistrictUpdate: validateDistrictUpdate,
};
