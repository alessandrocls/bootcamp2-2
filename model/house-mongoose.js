const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/house', { useMongoClient : true });
var Schema = mongoose.Schema;

var houseSchema = new Schema({
    name: String,
    address: String,
    customerId: Number;
});

var House = mongoose.model('house', houseSchema);

module.exports = House;
