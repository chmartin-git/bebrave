import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {
    const header = req.header("authorization");

    if (!header) return res.status(400).send({error: " problem with header ! "});

    const token = header.split(' ')[1];

    if (!token) return res.status(400).send({error: " no token found ! "});

    try {
        req.user = jwt.verify(token, process.env.API_SECRETKEY);
        next();
    } catch (err) {
        res.status(403).send({error: " Invalid token ! "});
    }
}
