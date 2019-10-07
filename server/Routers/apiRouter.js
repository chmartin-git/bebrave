import { Router } from 'express';
import database from "../mysqlDatabase";

const apiRouter = Router();
const db = new database();

apiRouter.get('/users', (req, res) => {
    db.query("SELECT * FROM users", [], (data) => {
        console.log(data);
        res.json(data);
    });
});

export default apiRouter;
