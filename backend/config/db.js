import mysql from 'mysql';

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "projetsql"
});

db.getConnection((err, connection) => {
    if (err) {
        throw err;
    }
    console.log(' === Table Check === ');

    try {
        connection.query("CREATE TABLE IF NOT EXISTS clients (id_client INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),password VARCHAR(255))", (err, result) => {
            if (err) {
                throw err;
            }
            console.log('Client Ok');
        });
    } catch (e) {
        console.log('Client Ko');
    }

    try {
        connection.query("CREATE TABLE IF NOT EXISTS driver (id_driver INT AUTO_INCREMENT PRIMARY KEY, name VarChar(255))", (err, result) => {
            if (err) {
                throw err;
            }
            console.log('Driver Ok');
        });
    } catch (e) {
        console.log('Driver Ko');
    }

    try {
        connection.query("CREATE TABLE IF NOT EXISTS restaurant (id_restaurant INT AUTO_INCREMENT PRIMARY KEY, name VarChar(255), Adress VARCHAR(255))", (err, result) => {
            if (err) {
                throw err;
            }
            console.log('Restaurant Ok');
        });
    } catch (e) {
        console.log('Restaurant Ko');
    }

    try {
        connection.query("CREATE TABLE IF NOT EXISTS meal (id_meal INT AUTO_INCREMENT PRIMARY KEY, id_restaurant INT,name VarChar(255), ingredients VarChar(255), FOREIGN KEY (id_restaurant) REFERENCES restaurant(id_restaurant))", (err, result) => {
            if (err) {
                throw err;
            }
            console.log('Meal Ok');
        });
    } catch (e) {
        console.log('Meal Ko');
    }


    try {
        connection.query("CREATE TABLE IF NOT EXISTS list_meal (id_list_meal INT AUTO_INCREMENT PRIMARY KEY, id_meal INT, FOREIGN KEY (id_meal) REFERENCES meal(id_meal))", (err, result) => {
            if (err) {
                throw err;
            }
            console.log('List_meal Ok');
        });
    } catch (e) {
        console.log('List_meal Ko');
    }

    try {
        connection.query("CREATE TABLE IF NOT EXISTS commands (id_command INT AUTO_INCREMENT PRIMARY KEY, id_client INT, id_driver INT, id_restaurant INT, id_list_meal INT, ordered_time INT, delivery_adress VARCHAR(255), command_state VARCHAR(255), error_message VARCHAR(255), FOREIGN KEY (id_client) REFERENCES clients(id_client), FOREIGN KEY (id_driver) REFERENCES driver(id_driver), FOREIGN KEY (id_restaurant) REFERENCES restaurant(id_restaurant), FOREIGN KEY (id_list_meal) REFERENCES list_meal(id_list_meal))", (err, result) => {
            if (err) {
                throw err
            }
            console.log('commands Ok');
        });
    } catch (e) {
        console.log('commands Ko');
    }

    try {
        connection.query("CREATE TABLE IF NOT EXISTS comments (id_comment INT AUTO_INCREMENT PRIMARY KEY, id_command INT, id_client INT, comment_text VARCHAR(255),id_restaurant INT, FOREIGN KEY (id_command) REFERENCES commands(id_command), FOREIGN KEY (id_client) REFERENCES clients(id_client), FOREIGN KEY (id_restaurant) REFERENCES restaurant(id_restaurant))", (err, result) => {
            if (err) {
                throw err
            }
            console.log('comments Ok');
        });
    } catch (e) {
        console.log('comments Ko');
    }


});

export {db};