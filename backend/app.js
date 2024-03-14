//Create a express App
import express from 'express';
import { router } from './router/userRoute.js';

const app = express()
const PORT = 3000;

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));



//Use the routes
app.use('/api', router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
