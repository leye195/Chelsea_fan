let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let seasonSchema=new Schema({
    league:String,
    seasons:Array,
});
module.exports = mongoose.model('season',seasonSchema,'season');