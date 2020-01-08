const http=require("http"),express=require("express");
const bodyparser=require('body-parser');
const cor=require("cors");
let mongoose=require('mongoose');
let db=mongoose.connection;
const app=express();

//middleware setting
app.use('/static',express.static(__dirname + '/public'))
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cor());

//connect MongoDB
db.on('error',console.error);
db.once('open',()=>{
    console.log("Connected to mongodb server");
})
mongoose.connect("mongodb://localhost/chelsea_db",{useNewUrlParser: true });

//import models
const player=require('./models/players');
const manager=require('./models/managers');

const port=process.env.PORT || 3030;
const route=require("./routes")(app,player,manager);
http.createServer(app).listen(port);
