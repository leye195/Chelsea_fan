import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.LOCAL_DB,{
    useNewUrlParser: true, 
    useFindAndModify: false
});
const db=mongoose.connection;
//connect MongoDB
db.on('error',console.error);
db.once('open',()=>{
    console.log("Connected to mongodb server");
})
