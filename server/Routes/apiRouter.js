import {Router} from 'express';

// UNCOMMENT NEXT LINES TO INTEGRATE MYSQL

// import database from "../mysqlDatabase";
// const db = new database();

import User from '../model/User';
import Joi from "@hapi/joi";


const userValidationSchema = new Joi.object({
    name: Joi.string().alphanum().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required()
});

const apiRouter = Router();

apiRouter.post("/register", async (req, res) => {

    const { error } = userValidationSchema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const newUser = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });

    try {
        const result = await newUser.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({
            err
        });
    }
});

apiRouter.post("/login", (req, res) => {

});


export default apiRouter;
