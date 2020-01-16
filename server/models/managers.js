import mongoose from 'mongoose';
let Schema=mongoose.Schema;
let managerSchema=new Schema({
    name:String,
    country:String,
    role:String,
    img:String
})
export default mongoose.model('manager',managerSchema,'manager');