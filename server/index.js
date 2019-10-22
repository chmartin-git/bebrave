import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import apiRouter from './Routers/apiRouter';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

app.listen(process.env.PORT || 5000,() => console.log(`Server is listening on port ${process.env.PORT}`));


export default app;
