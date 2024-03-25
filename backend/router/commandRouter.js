import express from 'express';
import {
    createCommand,
    deleteCommandController
} from "../controller/commandController.js";

const commandRouter = express.Router();

commandRouter.get('/test', (req, res) => {
    res.send('Route GET sur / avec commandes');
});

commandRouter.delete('/:id', deleteCommandController);

commandRouter.post('/', createCommand);
// commandRouter.post('/register', registerController);


export {commandRouter};