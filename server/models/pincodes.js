var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PincodeSchema   = new Schema({
    pincode: Number,
    address: String,
    city: String,
    state: String
});

module.exports = mongoose.model('Pincode', PincodeSchema);
