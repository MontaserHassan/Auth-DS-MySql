import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { connectSQL } from './src/Database/MySql.Database';
import router from './src/Routes/index.routes'




const app = express();



connectSQL(app);

app.use(express.json());
app.use(cors({
    credentials: true,
    // origin: [process.env.CLIENT_URL as string, process.env.CLIENT_URL_2 as string]
}));


app.use(router);