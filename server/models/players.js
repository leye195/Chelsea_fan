let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let playerSchema=new Schema({
    name:String,
    number:Number,
    country:String,
    position:String,
    img:String //ex) http://localhost:3030/static/img/players/goalkeeper/p1.png
})

module.exports = mongoose.model('player',playerSchema,'player');