import {
    commandSelectById,
    deleteCommand,
    insertAnCommand
} from "../service/commandService.js";
import {
    deleteAllForeinKey,
    insertListMeals,
    readListMeals
} from "../service/listMeals.js";


const deleteCommandController = (req, res) => {
    const id = req.params.id;
    console.log("data");
    console.log(id);

    // deleteAllForeinKey
    const promess = readListMeals(id)
        .then((data) => {
            // console.log(data);
            data.forEach((element) => {
                deleteAllForeinKey(element.id_command);
            });
        });

    Promise.all([promess])
        .then(() => {
            deleteCommand(id)
                .then((data) => {
                    res.status(200).send({data});
                })
                .catch((error) => {
                    console.log(error);
                });
        })
}

const createCommand = (req, res) => {
    const id_user = req.body.id_user;
    const id_restaurant = req.body.id_restaurant;
    const adress = req.body.adress;
    const meals = req.body.meals;


    insertAnCommand(id_user, id_restaurant, adress)
        .then((command) => {
            console.log('-- command --')
            console.log(command.insertId)

            console.log('-- command --')
            // insertDeliveryInCommand(1, id_user)
            //     .then((delivery) => {
            // console.log(delivery, 'delivery')

            insertListMeals(meals, command.insertId) // insert list of meals
            readListMeals(command.insertId)
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                });
            // res.status(200).send({data});
        })
        .catch((error) => {
            console.log(error);
        })
        // })
        .catch((error) => {
            console.log(error);
        });
}

const readByIdUserAllCommand = (req, res) => {
    commandSelectById()
        .then((dataRestaurants) => {
            if (dataRestaurants === undefined) {
                res.status(401).send('Identifiants incorrects');
            } else {
                res.status(200).send({dataRestaurants});
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

export {readByIdUserAllCommand, createCommand, deleteCommandController};