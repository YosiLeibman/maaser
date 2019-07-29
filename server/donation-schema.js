const mongoose = require('mongoose')
const donationSchema = mongoose.Schema({
	date: Date,
	description: String,
	sum: Number
})
module.exports = mongoose.model('Donation', donationSchema)
