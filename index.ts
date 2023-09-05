import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

import { connectSQL } from './src/Database/MySql.Database';
import router from './src/Routes/index.routes'




const app = express();



connectSQL(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use(router);