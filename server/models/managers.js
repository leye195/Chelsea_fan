let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let managerSchema=new Schema({
    name:String,
    country:String,
    role:String,
    img:String
})
module.exports = mongoose.model('manager',managerSchema,'manager');