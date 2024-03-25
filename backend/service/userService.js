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

const selectUserAnUserById = (id_client) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM clients WHERE id_client = ?';
        db.query(sql, [id_client], (error, results) => {
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
                            resolve(results.insertId);
                        } else {
                            reject(error);
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

