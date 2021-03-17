const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const MealTypeSchema = new Schema({
   MealType_id: {
        type: Number,
        required: true
    },


    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required:true
        
    },
    image: {
        type: String,
        required:true
    }

})

module.exports =  mongoose.model('mealtype', MealTypeSchema);   // exporting the model 