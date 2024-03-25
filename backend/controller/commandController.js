import {commandSelectById} from "../service/restaurantService.js";
import {insertAnCommand, insertDeliveryInCommand} from "../service/commandService.js";


const createCommand = (req, res) => {
    const id_user = req.body.id_user;
    const id_restaurant = req.body.id_restaurant;
    const adress = req.body.adress;
    const meals = req.body.meals;

    insertListMeals(meals, id_restaurant) // insert list of meals
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });

    insertAnCommand(id_user, id_restaurant, adress)
        .then((data) => {
            insertDeliveryInCommand(1, id_user)
                .then((data) => {
                    res.status(200).send({data});
                })
                .catch((error) => {
                    console.log(error);
                })
        })
        .catch((error) => {
            console.log(error);
        });
}

// const readAllRestaurants = (req, res) => {
const readByIdUserAllCommand = (req, res) => {

    commandSelectById()
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

export {readByIdUserAllCommand};