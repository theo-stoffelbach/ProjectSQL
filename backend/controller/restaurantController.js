import { selectAllRestaurants } from "../service/restaurantService.js";

const readAllRestaurants = (req, res) => {

    selectAllRestaurants()
        .then((dataRestaurants) => {
            if (dataRestaurants === undefined) {
                res.status(401).send('Identifiants incorrects');
            }else {
                res.status(200).send({dataRestaurants});
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

export { readAllRestaurants };