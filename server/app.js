const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Incom = require('./maaser-schema')
const Donation = require('./donation-schema')

const app = express()

app.use(cors())
app.use(express.json())

mongoose
	.connect('mongodb://localhost/massrot', { useNewUrlParser: true })
	.then(() => {
		console.log('Connected to MongoDBe')
	})
	.catch(err => {
		console.log('Not Connected to Database ERROR! ', err)
	})

app.get('/all-incomes', (req, res) => {
	Incom.find({})
		.then(data => {
			console.log(data)
			res.send(data)
		})
		.catch(err => {
			console.log(err)
			res.status(500)
		})
})

app.get('/all-donations', (req, res) => {
	Donation.find({})
		.then(data => {
			console.log(data)
			res.send(data)
		})
		.catch(err => {
			console.log(err)
			res.status(500)
		})
})

app.get('/maaser', (req, res) => {
	// Incom.remove({ _id: '5d3e7c088346bf3458bf8ad3' }).then(d => console.log(d))
	let sum = 0
	Incom.find({})
		.then(data => {
			// console.log(data)
			data.forEach(m => (sum += m.maaser))
			console.log('sum of maaser: ' + sum)
		})
		.then(_ => {
			Donation.find({})
				.then(sdata => {
					// console.log(data)
					console.log(`sum now is ${sum}`)
					sdata.forEach(m => {
						console.log(m.sum)
						sum -= m.sum
					})
					console.log('sum of donation: ' + sum)
					res.send(`sum of maaser: ${sum}`)
				})
				.catch(err => {
					console.log(err)
					res.status(500)
				})
		})
		.catch(err => {
			console.log(err)
			res.status(500)
		})
})

app.post('/new', (req, res) => {
	if (req.body.description && req.body.sum) {
		let NewIncom = new Incom({
			date: Date(),
			description: req.body.description,
			sum: req.body.sum,
			maaser: req.body.sum / 10
		}) // this is modal object.
		NewIncom.save()
			.then(data => {
				console.log(data)
				res.json(data)
			})
			.catch(err => {
				console.log(err)
				res.status(500)
			})
	} else {
		res.status(400)
	}
})

app.post('/new-donation', (req, res) => {
	if (req.body.description && req.body.sum) {
		let NewDonation = new Donation({
			date: Date(),
			description: req.body.description,
			sum: req.body.sum
		})
		NewDonation.save()
			.then(data => {
				console.log(data)
				res.json(data)
			})
			.catch(err => {
				console.log(err)
				res.status(500)
			})
	} else {
		res.status(400)
	}
})

app.listen(3003, _ => console.log('server started on port 3003'))
