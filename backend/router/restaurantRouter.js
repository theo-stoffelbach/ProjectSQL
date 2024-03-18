import express from 'express';
import {
    readAllRestaurants
} from "../controller/restaurantController.js";
const restaurantRouter = express.Router();

restaurantRouter.get('/test', (req, res) => {
    res.send('Route GET sur / avec restaurant');
});

restaurantRouter.get('/', readAllRestaurants);
// restaurantRouter.post('/register', registerController);


export {restaurantRouter};