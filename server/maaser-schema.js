const mongoose = require('mongoose')
const incomeSchema = mongoose.Schema({
	date: Date,
	description: String,
	sum: Number,
	maaser: Number
})
module.exports = mongoose.model('Income', incomeSchema)
