var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath:String,
    id:String,
    name:String, 
    producer:String,
    type:String,
    price:Number,
    detail:String
});
module.exports = mongoose.model('Product', schema);

