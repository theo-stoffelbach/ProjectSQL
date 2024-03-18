//Create a express App
import express from 'express';
import { userRouter } from './router/userRoute.js';
import { restaurantRouter } from './router/restaurantRouter.js';
// import { connectionDB } from './service/userService.js';
import { db } from './config/db.js';

const app = express()
const PORT = 3000;

// connectionDB();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Use the routes


// Later Inmplement Global Router
app.use('/api/user/', userRouter);
app.use('/api/restaurants/', restaurantRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
