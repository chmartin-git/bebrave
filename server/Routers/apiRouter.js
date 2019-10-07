import { Router } from 'express';
import database from "../mysqlDatabase";

const apiRouter = Router();
const db = new database();

apiRouter.post('/users', (req, res) => {
    db.query("SELECT * FROM users WHERE User_pseudo = ? ", [req.body.user], (data) => {
        res.json(data);
    });
});

export default apiRouter;
