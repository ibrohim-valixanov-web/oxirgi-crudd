const Joi = require("joi");

const validateEventType = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    parent_event_type_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

const validateEventTypeUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    parent_event_type_id: Joi.number().allow(null),
  });

  return schema.validate(data);
};

module.exports = {
  validateEventType,
  validationEventType: validateEventType,
  validateEventTypeUpdate,
  validationEventTypeUpdate: validateEventTypeUpdate,
};
