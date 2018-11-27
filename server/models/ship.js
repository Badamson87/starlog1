let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Ship"

// user schema
let schema = new Schema({
  name: { type: String, required: true },
  crew: [{ type: ObjectId, ref: "User" }]
})

let model = mongoose.model(name, schema)
module.exports = model