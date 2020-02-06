import mongoose from "mongoose";
let Schema = mongoose.Schema;
let playerSchema = new Schema({
  name: String,
  number: Number,
  country: String,
  position: String,
  img: String, //ex) http://localhost:3030/static/img/players/goalkeeper/p1.png,
  height: String,
  birth: String,
  appearance: {
    type: Number,
    default: 0
  },
  goals: {
    type: Number,
    default: 0
  },
  cleansheets: {
    type: Number,
    default: 0
  }
});
export default mongoose.model("player", playerSchema, "player");
