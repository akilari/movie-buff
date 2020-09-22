var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    id: String,
    title: String,
    year: String
});

module.exports = mongoose.model('movies' , MovieSchema);