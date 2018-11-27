let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Log"


// user schema
let schema = new Schema({
  description: { type: String },
  date: { type: String },
  shipId: { type: ObjectId, ref: "Ship" },
  userId: { type: ObjectId, ref: "User" },
  comments: [{ type: ObjectId, ref: "Comment" }]
})

let model = mongoose.model(name, schema)
module.exports = model