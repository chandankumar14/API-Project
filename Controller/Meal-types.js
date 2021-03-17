const MealType = require('../Model/Meal-Types');

exports.GetMealtypes = (req, res) => {
    MealType.find()
    .then( result => {
        res.status(200).json({message:'location fetch succesfully', mealtypes:result})
    })
    .catch(err =>{
    res.status(500).json({message:err})
    })
    }