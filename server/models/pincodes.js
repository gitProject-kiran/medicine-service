var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PincodeSchema   = new Schema({
    Name: String,
    Description: String,
    PINCode: String,
    BranchType: String,
    DeliveryStatus: String,
    Taluk: String,
    Circle: String,
    District: String,
    Division: String,
    Region: String,
    State: String,
    Country: String
});

module.exports = mongoose.model('Pincode', PincodeSchema);
