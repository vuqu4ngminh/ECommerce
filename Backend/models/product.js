const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    nxb: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema);