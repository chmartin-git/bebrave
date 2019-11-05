import { Router } from 'express';
// import database from "../mysqlDatabase";
import User from '../model/User';

const apiRouter = Router();
// const db = new database();

apiRouter.post("/login", (req, res) =>  {

});

apiRouter.post("/register", async (req, res) => {
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



export default apiRouter;
