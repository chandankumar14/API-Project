const Restaurant = require('../Model/Restaurant');  // importing the Restaurant Model
// filter function to filter the data based on multiple params
exports.filterSearch = (req, res, next) => {
    const queryParams = req.body;   // capturing all the params from request body

    const location_id = queryParams.location_id;
    const cuisine = queryParams.cuisine;
    const mealtype_id = queryParams.mealtype_id;
    const hcost = queryParams.hcost;
    const lcost = queryParams.lcost;
    const page = queryParams.page ? queryParams.page : 1;    // 1 is default value for page
    const sort = queryParams.sort ? queryParams.sort : 1;    // 1 means ascending order & -1 means descending order
    const perPageCount = queryParams.perPageCount ? queryParams.perPageCount : 5; // number of items per page 

    let start;
    let end;
    start = Number(page * perPageCount) - perPageCount;   // setting the values for start and end params for pagination
    end = Number(page * perPageCount);
    let payload = {};   // Initializing the payload to request

    // Initializing the payload object for quering the DB
    if (mealtype_id) {
        payload = {
            mealtype_id: Number(mealtype_id)
        }
    }
    if (mealtype_id && hcost && lcost) {
        payload = {
            mealtype_id: Number(mealtype_id),
            min_price: { $gt: lcost, $lt: hcost }
        }
    }
    if (mealtype_id && location_id) {
        payload = {
            location_id: Number(location_id),
            mealtype_id: Number(mealtype_id)
        }
    }
    if (mealtype_id && cuisine) {
        payload = {
            cuisine: { $in: cuisine },
            mealtype_id: Number(mealtype_id)
        }
    }
    if (location_id && cuisine && mealtype_id) {
        payload = {
            location_id: Number(location_id),
            cuisine: { $in: cuisine },
            mealtype_id: Number(mealtype_id)
        }
    }
    if (location_id && cuisine && mealtype_id && hcost && lcost) {
        payload = {
            location_id: Number(location_id),
            cuisine: { $in: cuisine },
            mealtype_id: Number(mealtype_id),
            min_price: { $gt: lcost, $lt: hcost }
        }
    }
    if (location_id && mealtype_id && hcost && lcost) {
        payload = {
            location_id: Number(location_id),
            mealtype_id: Number(mealtype_id),
            min_price: { $gt: lcost, $lt: hcost }
        }
    }
    Restaurant.find(payload).sort({ min_price: sort }).then(result => {
        const count = Math.ceil(result.length / 5);
        const pageCountArr = [];
        const resultValues = result.slice(start, end);  // to return paginated items
        for (var i = 1; i <= count; i++) {
            pageCountArr.push(i);
        }
        res.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurant: resultValues, pageCount: pageCountArr, totalCount: result.length });
    }).catch(err => {
        res.status(500).json({ message: err })
    });
}














// getRestaurantByCity function to get restaurants by city name
exports.getRestaurantByCity = (req, res) => {
    const cityName = req.params.cityName;
    Restaurant.find({ city_name: cityName }).then(result => {
        res.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurantList: result })
            .catch(err => {
                res.status(500).json({ message: err })
            });
    })
}

// getRestaurantById function to get restaurants by Id
exports.getRestaurantById = (req, res, next) => {
    const resId = req.params.resId;
    Restaurant.findById({city_id: resId}).then(result => {
        res.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurant: result })
    }).catch(err => {
        res.status(500).json({ message: err })
    });
}

