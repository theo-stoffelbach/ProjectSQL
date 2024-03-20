import {createAnUser, selectUserAnUser, selectUserAnUserById} from "../service/userService.js";
import {commandSelectById} from "../service/commandService.js";


const loginController = (req, res) => {
    console.log("c'est la sauce")
    const username = req.body.username;
    const password = req.body.password;

    console.log("username : ", username, "password : ", password);

    selectUserAnUser({username: username, password: password})
        .then((test) => {
            console.log(test, 'test')
            if (test === undefined || test === null) {
                res.status(401).send('User not found');
            } else {
                if (test.password !== password) {
                    res.status(401).send('Identifiants incorrects');
                }
                res.status(200).send(test);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

const registerController = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    createAnUser({username: username, password: password})
        .then((test) => {
            console.log(test, 'test')
            if (test === null) {
                res.status(401).send('Error to create');
            } else {
                res.status(200).send(test);
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send('Error to create2');

        });
}


const profilController = (req, res) => {
    const id_user = req.params.id_user;
    let result = {};

    selectUserAnUserById(id_user)
        .then((data) => {
            result.user = data
            commandSelectById(id_user)
                .then(data2 => {
                    result.command = [];

                    for (let i = 0; i < data2.length; i++) {
                        result.command.push(data2[i]);
                    }
                    res.status(200).send(result);

                })
                .catch(err => {
                    console.log("error : ", err);
                    res.status(400).send('Error to read command');
                })
        })
        .catch(err => {
            console.log("error : ", err);
            res.status(400).send('Error to read user');
        })


}

export {loginController, registerController, profilController};