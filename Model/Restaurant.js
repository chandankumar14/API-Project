const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Registering the Restaurant Schema
const RestaurantSchema = new Schema({

    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    },
    location_id: {
        type: Number,
        required: true
    },
    city_id: {
        type: Number,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    thumb: {
        type: Array,
        required: true
    },
    aggregate_rating: {
        type: Number,
        required: true
    },
    mealtype_id: {
        type: Number,
        required: true
    },
    min_price: {
        type: Number,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    type: {
        type: Array,
        required: true
    },
    cuisine: {
        type: Array,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

// checking the model existence, if not exist then create collection in DB
module.exports =  mongoose.model('Restaurant', RestaurantSchema);