const Joi = require("joi");

const validateGender = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateGenderUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateGender,
  validationGender: validateGender,
  validateGenderUpdate,
  validationGenderUpdate: validateGenderUpdate,
};
