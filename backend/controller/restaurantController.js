import {selectAllRestaurants, selectByIdRestaurant} from "../service/restaurantService.js";
import {selectAllMealByIdRestaurant} from "../service/mealService.js";

const readAllRestaurants = (req, res) => {

    selectAllRestaurants()
        .then((dataRestaurants) => {
            if (dataRestaurants === undefined) {
                res.status(401).send('Identifiants incorrects');
            } else {
                res.status(200).send({dataRestaurants});
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

const readByIdRestaurant = (req, res) => {
    const id_restaurant = req.params.id;
    let result = {};
    console.log(id_restaurant)
    selectByIdRestaurant(id_restaurant)
        .then((dataRestaurant) => {
            result.restaurant = dataRestaurant
                
            selectAllMealByIdRestaurant(id_restaurant)
                .then(dataMeal => {
                    result.meals = dataMeal;
                    console.log(result);
                    res.status(200).send(result);
                })
        })
        .catch((error) => {
            console.log(error);
        });
}

export {readAllRestaurants, readByIdRestaurant};