import {db} from '../config/db.js';

const ReadCommentByIdRestaurant = (IdRestaurant) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM comments WHERE id_restaurant = ?';
        db.query(sql, [IdRestaurant], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const createAComment = (idClient, idCommand, comment, idRestaurant) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO comments(id_command,id_comments,comment_text, id_restaurant) VALUES (?, ?, ?, ?)';
        db.query(sql, [idClient, idCommand, comment, idRestaurant], (error, results) => {
            if (error === null || error === undefined) {
                console.log(results.insertId, 'results');
                resolve(error);
            } else {
                reject(error)
            }
        });
    });
};


export {ReadCommentByIdRestaurant, createAComment};

