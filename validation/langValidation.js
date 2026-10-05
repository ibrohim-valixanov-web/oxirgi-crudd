const Joi = require("joi");

const validateLang = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateLangUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
  });

  return schema.validate(data);
};

module.exports = {
  validateLang,
  validationLang: validateLang,
  validateLangUpdate,
  validationLangUpdate: validateLangUpdate,
};
