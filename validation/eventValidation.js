const Joi = require("joi");

const validateEvent = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    photo: Joi.string().allow('', null),
    start_date: Joi.date().raw().allow(null),
    start_time: Joi.string().allow('', null),
    finish_date: Joi.date().raw().allow(null),
    finish_time: Joi.string().allow('', null),
    info: Joi.string().allow('', null),
    event_type_id: Joi.number().allow(null),
    human_category_id: Joi.number().allow(null),
    venue_id: Joi.number().allow(null),
    lang_id: Joi.number().allow(null),
    release_date: Joi.date().raw().allow(null),
  });

  return schema.validate(data);
};

const validateEventUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    photo: Joi.string().allow('', null),
    start_date: Joi.date().raw().allow(null),
    start_time: Joi.string().allow('', null),
    finish_date: Joi.date().raw().allow(null),
    finish_time: Joi.string().allow('', null),
    info: Joi.string().allow('', null),
    event_type_id: Joi.number().allow(null),
    human_category_id: Joi.number().allow(null),
    venue_id: Joi.number().allow(null),
    lang_id: Joi.number().allow(null),
    release_date: Joi.date().raw().allow(null),
  });

  return schema.validate(data);
};

module.exports = {
  validateEvent,
  validationEvent: validateEvent,
  validateEventUpdate,
  validationEventUpdate: validateEventUpdate,
};
