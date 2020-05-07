const Joi = require('@hapi/joi');

// Register Validation
const registervalidation =(data)=>{
  const Schema =Joi.object({
      name:Joi.string()
      .min(6)
      .required(),
      email:Joi.string()
      .min(6)
      .required()
      .email(),
      password:Joi.string()
      .min(6)
      .required()
  })
  return Schema.validate(data)
}

const loginvalidation =(data)=>{
  const Schema = Joi.object({
      email:Joi.string()
      .min(6)
      .required(),
      password:Joi.string()
      .min(6)
      .required()
  });
  return Schema.validate(data)
}

module.exports.registervalidation= registervalidation
module.exports.loginvalidation= loginvalidation
