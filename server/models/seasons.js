let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let seasonSchema=new Schema({
    season:String,
    rank:String,
    matches:Number,
    won:Number,
    draw:Number,
    lost:Number,
    gd:String,
    points:Number,
    managers:Array,
    topScorer:Array,
    mostAppear:Array,
    biggestWin:String,
    harvestDefeat:String,
    kits:Array
});
module.exports = mongoose.model('season',seasonSchema,'season');