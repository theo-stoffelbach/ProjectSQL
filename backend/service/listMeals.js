import {db} from '../config/db.js';

const insertListMeals = (meals, id_command) => {

    meals.forEach(id_meal => {
        const sql = 'INSERT INTO list_meal (id_meal,id_command) VALUES (?, ?)';
        return db.query(sql, [id_meal, id_command], (error, results) => {
            if (error) {
                console.log(error);
                return error;
            } else {
                return results;
            }
        });
    });
}

const readListMeals = (id_command) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM list_meal WHERE id_command = ?';
        db.query(sql, [id_command], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });

}

export {insertListMeals, readListMeals};
