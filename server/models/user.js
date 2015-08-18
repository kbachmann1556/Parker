var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: String,
	date: {type: Date, default: new Date},
	email: String,
	password: String,
	hostedSpaces: [{type: mongoose.Schema.Types.ObjectId, ref: "ParkingSpace"}],
	reservedSpaces: [{type: mongoose.Schema.Types.ObjectId, ref: "ParkingSpace"}]
});

mongoose.model('User', UserSchema);