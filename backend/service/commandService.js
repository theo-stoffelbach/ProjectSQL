import {db} from '../config/db.js';

const getCookieByName = (name) => {
    const cookie = document.cookie.split(";");
    let result = null;
    cookie.forEach((element) => {
        if (element.includes(name)) {
            console.log(element, 'element');
            console.log("yes");
            result = element.split("=")[1];
            return element;
        }
    });
    if (result === null) {
        console.log("no");
        return null;
    }
    return result;
}

const insertAnCommand = (id_user, id_restaurant, adresse) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO commands (id_client, id_restaurant, delivery_adress) VALUES (?, ?, ?)';
        db.query(sql, [id_user, id_restaurant, adresse], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}


const commandSelectById = (id_profil) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM commands WHERE id_client = ?';
        db.query(sql, [id_profil], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// UPDATE COMMAND

const insertDeliveryInCommand = (id_command, id_delivery) => {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE commands SET id_delivery = ? WHERE id_command = ?';
        db.query(sql, [id_delivery, id_command], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

const editAnCommand = (command) => {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE commands SET id_client = ?, id_restaurant = ?, date = ? WHERE id = ?';
        db.query(sql, [command.id_client, command.id_restaurant, command.date, command.id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};


const deleteCommand = (commandId) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM commands WHERE id_command = ?';

        db.query(sql, [commandId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};


export {commandSelectById, insertAnCommand, insertDeliveryInCommand, deleteCommand};

