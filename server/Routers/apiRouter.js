import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/users', (req, res) => {
    res.json({
        data: "COUCOU ! "
    })
});

export default apiRouter;
