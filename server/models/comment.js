let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Comment"

// user schema
let schema = new Schema({
  content: { type: String, required: true },
  date: { type: String },
  logId: { type: ObjectId, ref: "Log" },
  userId: { type: ObjectId, ref: "User" }
})

let model = mongoose.model(name, schema)
module.exports = model