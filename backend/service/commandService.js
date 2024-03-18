import mysql from 'mysql';
import { db } from '../config/db.js';

const commandSelectById = (id_profil) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM commands WHERE id_client = ?';
        db.query(sql, [id_profil],(error, results) => {
            if (error) {
                reject(error);
            } else {

                resolve(results);
            }
        });
    });
};

export { commandSelectById };

