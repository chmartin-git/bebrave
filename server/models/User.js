import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    pseudo: {
        type: String,
        required: true,
        max: 20
    },
    email: {
        type: String,
        required: true,
        max: 256
    },
    password: {
        type: String,
        required: true,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export function registerValidation(params) {

    const userValidationSchema = new Joi.object({
        firstName: Joi.string().alphanum().required(),
        lastName: Joi.string().alphanum().required(),
        pseudo: Joi.string().alphanum().required().max(20),
        password: Joi.string().required().max(1024),
        email: Joi.string().email().required().max(256)
    });
    return userValidationSchema.validate(params);
}

export function loginValidation(params) {
    const userValidationSchema = new Joi.object({
        pseudo: Joi.string().alphanum().required().max(20),
        password: Joi.string().required().max(1024)
    });
    return userValidationSchema.validate(params);
}

export default new mongoose.model('User', userSchema);
