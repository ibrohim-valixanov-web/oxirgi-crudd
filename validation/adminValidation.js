const Joi = require("joi");

const validateAdmin = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    login: Joi.string().required(),
    hashed_password: Joi.string().min(6).required(),
    is_active: Joi.boolean().default(true),
    is_creator: Joi.boolean().default(false),
    hashed_refresh_token: Joi.string().allow('', null),
  });

  return schema.validate(data);
};

const validateAdminUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    login: Joi.string(),
    hashed_password: Joi.string().min(6),
    is_active: Joi.boolean(),
    is_creator: Joi.boolean(),
    hashed_refresh_token: Joi.string().allow('', null),
  });

  return schema.validate(data);
};

module.exports = {
  validateAdmin,
  validationAdmin: validateAdmin,
  validateAdminUpdate,
  validationAdminUpdate: validateAdminUpdate,
};
