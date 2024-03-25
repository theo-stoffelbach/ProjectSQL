//Create a express App
import express from 'express';
import {userRouter} from './router/userRoute.js';
import {restaurantRouter} from './router/restaurantRouter.js';
import {commandRouter} from './router/commandRouter.js';
import cors from 'cors';
// import { connectionDB } from './service/userService.js';

const app = express()
const PORT = 3000;

// connectionDB();
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: true}));

//Use the routes


// Later Inmplement Global Router
app.use('/api/user/', userRouter);
app.use('/api/command/', commandRouter);
app.use('/api/restaurant/', restaurantRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
