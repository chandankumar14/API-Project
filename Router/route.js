const express= require('express');
const router = express.Router();
const ControllerLocation = require('../Controller/location');
const ControllerMealTypes = require('../Controller/Meal-types');
const ControllerRestaurant = require('../Controller/Restaurants')






// these are the API  that is based on different parameter

router.get('/Meal-Types',ControllerMealTypes.GetMealtypes);
router.get('/location',ControllerLocation.Getlocation);
router.post('/restaurantfilter',ControllerRestaurant.filterSearch);
router.get('/getRestaurantsbycity/:cityName', ControllerRestaurant.getRestaurantByCity);
router.get('/getResById/:resId', ControllerRestaurant.getRestaurantById);
module.exports = router;

// module.export function is used to export the model for use on different places