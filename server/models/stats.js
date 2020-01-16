import mongoose from 'mongoose';
let Schema=mongoose.Schema;
let statSchema=new Schema({
    s_id:Number,
    played:String,
    wins: String,
    losses: String,
    goals: String,
    goalsConceded: String,
    cleanSheets: String,
    attack:Schema.Types.Mixed,
    teamplay:Schema.Types.Mixed,
    defence:Schema.Types.Mixed,
    discipline:Schema.Types.Mixed
})
export default mongoose.model('stat',statSchema,'stat');    