import express from 'express';
import {
    // readAllRestaurants
} from "../controller/restaurantController.js";
const commandRouter = express.Router();

commandRouter.get('/test', (req, res) => {
    res.send('Route GET sur / avec commandes');
});

// commandRouter.get('/', readAllRestaurants);
// commandRouter.post('/register', registerController);


export {commandRouter};