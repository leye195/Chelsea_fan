import http from 'http';
import express from 'express';
import bodyparser from 'body-parser';
import helmet from 'helmet';
import cor from 'cors';
import dotenv from 'dotenv';
import player from './models/players';
import manager from './models/managers';
import stats from './models/stats';
import route from './routes';
dotenv.config();
const app=express();

//middleware setting
app.use('/static',express.static(__dirname + '/public'))
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(helmet());
app.use(cor());

const PORT=process.env.PORT || 3030;
route(app,player,manager,stats);
http.createServer(app).listen(PORT);
