const Joi = require("joi");

const validateHumanCategory = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    start_age: Joi.number().allow(null),
    finish_age: Joi.number().allow(null),
    gender_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

const validateHumanCategoryUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    start_age: Joi.number().allow(null),
    finish_age: Joi.number().allow(null),
    gender_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

module.exports = {
  validateHumanCategory,
  validationHumanCategory: validateHumanCategory,
  validateHumanCategoryUpdate,
  validationHumanCategoryUpdate: validateHumanCategoryUpdate,
};
