const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const LocationSchema = new Schema({
    id: {
        type: String,
        required: true
    },


    name: {
        type: String,
        required: true
    },
    city_id: {
        type: String
    },
    location_id: {
        type: String
    },
    country_name: {
        type: String,
        required: true
    }
})

module.exports =  mongoose.model('Locations', LocationSchema);   // exporting the model 