import express from 'express';
import {readAllRestaurants, readByIdRestaurant} from "../controller/restaurantController.js";

const restaurantRouter = express.Router();

restaurantRouter.get('/test', (req, res) => {
    res.send('Route GET sur / avec restaurant');
});

restaurantRouter.get('/', readAllRestaurants);
restaurantRouter.get('/:id', readByIdRestaurant);
// restaurantRouter.post('/register', registerController);


export {restaurantRouter};