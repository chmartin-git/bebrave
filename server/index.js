import express from 'express'
import cors from 'cors'
import apiRouter from './Routes/apiRouter';
import mongoose from 'mongoose';

require('dotenv').config();

mongoose.connect(process.env.CREDENTIALS, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => console.log("connected to database"));


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

app.listen(process.env.PORT || 5000,() => console.log(`Server is listening on port ${process.env.PORT}`));


export default app;
