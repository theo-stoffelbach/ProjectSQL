import {db} from '../config/db.js';

const insertListMeals = (meals, id_restaurant) => {

    //insert list of meals 1 by 1
    meals.forEach(id_meal => {
        const sql = 'INSERT INTO list_meal (id_meal,id_restaurant) VALUES (?, ?)';
        db.query(sql, [id_meal, id_restaurant], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                return results;
            }
        });
    });


}