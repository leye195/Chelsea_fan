let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let statSchema=new Schema({
    s_id:Number,
    played:String,
    wins: Number,
    losses: Number,
    goals: Number,
    goalsConceded: Number,
    cleanSheets: Number,
    attack:Schema.Types.Mixed,
    teamplay:Schema.Types.Mixed,
    defence:Schema.Types.Mixed,
    discipline:Schema.Types.Mixed
})
module.exports = mongoose.model('stats',statSchema,'stats');    