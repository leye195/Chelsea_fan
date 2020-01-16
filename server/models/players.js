import mongoose from 'mongoose';
let Schema=mongoose.Schema;
let playerSchema=new Schema({
    name:String,
    number:Number,
    country:String,
    position:String,
    img:String //ex) http://localhost:3030/static/img/players/goalkeeper/p1.png
})
export default mongoose.model('player',playerSchema,'player');