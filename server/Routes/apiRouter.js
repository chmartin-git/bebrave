import {Router} from 'express';
import User, {loginValidation, registerValidation} from '../model/User';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import fs from 'fs';

// Loading keys
const privateKey = fs.readFileSync('../config/private.key', 'utf8');
const publicKey = fs.readFileSync('../config/public.key', 'utf8');

// Token signing options
const signOptions = {
    expiresIn:  "1h",
    algorithm:  "RS256"
};

// Token verification options
const verifyOptions = {
    expiresIn:  "12h",
    algorithm:  ["RS256"]
};

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

    // Hash password + salt generation
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    // creating user
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        pseudo: req.body.pseudo,
        password: hash,
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

apiRouter.post("/login", async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({error: error.details[0].message});

    const user = await User.findOne({pseudo: req.body.pseudo});
    if (!user) return res.status(400).json({error: " Username or password is wrong"});

    // hash verification
    const validation = await bcrypt.compare(req.body.password, user.password);
    if (!validation) return res.status(400).json({error: " Username or password is wrong"});

    // Token creation 1h lifetime
    const token = jwt.sign({uid: user._id}, privateKey, signOptions);
    res.header('auth-token',token).status(200).send({message: "Successfully logged in ! ", token});
});


export default apiRouter;
