import express from 'express';
import {createCommand} from "../controller/commandController.js";

const commandRouter = express.Router();

commandRouter.get('/test', (req, res) => {
    res.send('Route GET sur / avec commandes');
});

commandRouter.post('/', createCommand);
// commandRouter.post('/register', registerController);


export {commandRouter};