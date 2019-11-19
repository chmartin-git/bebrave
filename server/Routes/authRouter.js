import {Router} from 'express';
import User, {loginValidation, registerValidation} from '../models/User';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import fs from 'fs';
import errors, {log} from '../const/errors';

// Loading keys
const privateKey = fs.readFileSync(__dirname + '/../config/private.key', 'utf8');
const publicKey = fs.readFileSync(__dirname + '/../config/public.key', 'utf8');

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

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
    // Joi validation
    const { error } = registerValidation(req.body);

    // verify if data is correct
    if (error) {
        log("bad-data");
        return res.status(400).json({error : errors["bad-data"]});
    }

    //verify if data isn't already in database
    const pseudoExists = await User.findOne({pseudo: req.body.pseudo});
    if (pseudoExists) {
        log("taken-pseudo");
        return res.status(400).json({
            error: errors["taken-pseudo"]
        });
    }

    const emailExists = await User.findOne({email: req.body.email});
    if (emailExists) {
        log("taken-email");
        return res.status(400).json({
            error: errors["taken-email"]
        });
    }

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
        log("user-created", result);
        res.status(201).json({result});
    } catch (err) {
        log("unknown", err);
        res.status(400).json({
            error: {
                code: errors["unknown"].code,
                message: errors["unknown"].message + err
            }
        });
    }
});

authRouter.post("/login", async (req, res) => {

    const { error } = loginValidation(req.body);
    if (error) {
        log("bad-data");
        return res.status(400).json({error : errors["bad-data"]});
    }

    const user = await User.findOne({pseudo: req.body.pseudo});
    if (!user) {
        log('wrong-information');
        return res.status(400).json({error: errors["wrong-information"]});
    }

    // hash verification
    const validation = await bcrypt.compare(req.body.password, user.password);
    if (!validation) {
        log('wrong-information');
        return res.status(400).json({error: errors["wrong-information"]});
    }

    // Token creation 1h lifetime
    const token = jwt.sign({uid: user._id}, privateKey, signOptions);
    log("token-created");
    res.header('auth-token',token).status(200).json({error: errors["token-created"]});
});


export default authRouter;
