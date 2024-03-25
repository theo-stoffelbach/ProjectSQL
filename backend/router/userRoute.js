import express from 'express';
import {
    loginController,
    registerController,
    profilController
} from "../controller/userController.js";
const userRouter = express.Router();

userRouter.get('/test', (req, res) => {
    res.send('Route GET sur / avec un user');
});
userRouter.get('/profil/:id_user', profilController);

userRouter.post('/login', loginController);
userRouter.post('/register', registerController);


export {userRouter};