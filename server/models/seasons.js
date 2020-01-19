import mongoose from 'mongoose';
let Schema=mongoose.Schema;
let seasonSchema=new Schema({
    season:{type:String,required:"season is required"},
    rank:{type:String,required:"rank is required"},
    matches:{type:Number,required:"matches is required"},
    won:{type:Number,default:0},
    draw:{type:Number,default:0},
    lost:{type:Number,default:0},
    gd:{type:String},
    points:{type:Number,default:0},
    managers:[],
    topScorer:[],
    mostAppear:[],
    biggestWin:[],
    harvestDefeat:{type:String},
    kits:[]
});
export default mongoose.model('Season',seasonSchema);