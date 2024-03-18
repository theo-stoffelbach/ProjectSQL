// Importer le module MySQL
import {db} from '../config/db.js';

const selectUserAnUser = (user) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM clients WHERE name = ?';
        db.query(sql, [user.username], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
};

const selectUserAnUserById = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM clients WHERE id = ?';
        db.query(sql, [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
};

const createAnUser = (user) => {
    return new Promise((resolve, reject) => {

        selectUserAnUser(user)
            .then((result) => {

                if (result === undefined) {
                    const sql = 'INSERT INTO clients (name, password) VALUES (?, ?)';
                    db.query(sql, [user.username, user.password], (error, results) => {
                        if (error === null || error === undefined) {
                            console.log(results.insertId, 'results');
                            reject(error);
                        } else {
                            return results;
                        }
                    });
                } else {
                    reject('User already exist');
                }
            }).catch((error) => {
                console.log(error, 'error');
            }
        );
    });
};

export {selectUserAnUser, createAnUser, selectUserAnUserById};

