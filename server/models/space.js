var mongoose = require('mongoose');

var ParkingSpaceSchema = new mongoose.Schema({
	spaceType: String,
	dateCreated: {type: Date, default: new Date},
	carType: String,
	address: String,
	city: String,
	state: String,
	zip: Number,
	image: String,
	price: Number,
	dateStart: Date,
	dateEnd: Date,
	reserved: Boolean,
	_UserHost: {type: mongoose.Schema.ObjectId, ref: "User"},
	_UserReserve: {type: mongoose.Schema.ObjectId, ref: "User"}
});

mongoose.model('ParkingSpace', ParkingSpaceSchema);