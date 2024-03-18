import {db} from '../config/db.js';

const selectAllRestaurants = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM restaurant';
        db.query(sql, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};


const selectByIdRestaurant = (id_restaurant) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM restaurant WHERE id_restaurant = ?';
        db.query(sql, [id_restaurant], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

export {selectAllRestaurants};

