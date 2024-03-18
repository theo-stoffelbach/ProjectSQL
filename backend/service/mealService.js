import {db} from '../config/db.js';

const selectAllMealByIdRestaurant = (id_restaurant) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM meal WHERE id_restaurant = ?';
        db.query(sql, [id_restaurant], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

export {selectAllMealByIdRestaurant};

