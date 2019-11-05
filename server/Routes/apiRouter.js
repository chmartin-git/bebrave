import {Router} from 'express';

// UNCOMMENT NEXT LINES TO INTEGRATE MYSQL

// import database from "../mysqlDatabase";
// const db = new database();


// Importation of user model and joi validation function
import User, { registerValidation } from '../model/User';

const apiRouter = Router();

apiRouter.post("/register", async (req, res) => {
    // Joi validation
    const { error } = registerValidation(req.body);

    // verify if data is correct
    if (error) return res.status(400).json({error : error.details[0].message});

    //verify if data isn't already in database
    const pseudoExists = await User.findOne({pseudo: req.body.pseudo});
    if (pseudoExists) return res.status(400).json({
        error: "Pseudo already taken !"
    });

    const emailExists = await User.findOne({email: req.body.email});
    if (emailExists) return res.status(400).json({
        error: "Email already taken !"
    });

    // creating user
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        pseudo: req.body.pseudo,
        password: req.body.password,
        email: req.body.email
    });

    try {
        //adding user to database
        const result = await newUser.save();
        res.status(201).json({result});
    } catch (err) {
        res.status(400).json({
            err
        });
    }
});

apiRouter.post("/login", (req, res) => {

});


export default apiRouter;
