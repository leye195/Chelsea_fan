import http from 'http';
import express from 'express';
import bodyparser from 'body-parser';
import helmet from 'helmet';
import cor from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import './db';
import globalRouter from './index';
dotenv.config();
const app=express();

//middleware setting
app.use(helmet());
app.use(cor());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(morgan("dev"));//common,tiny,dev
app.use('/static',express.static(__dirname + '/public'))

app.use("/",globalRouter);
const PORT=process.env.PORT || 3000;
http.createServer(app).listen(PORT,()=>{
    console.log(`Express is running on PORT:${PORT}`)
});
