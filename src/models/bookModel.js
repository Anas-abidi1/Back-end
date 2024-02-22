const mongoose = require ('mongoose');

const bookSchema = mongoose.Schema({
    title:String,
    author:String,
    date:String
})
const model = mongoose.model('Book', bookSchema);
module.exports = model;

