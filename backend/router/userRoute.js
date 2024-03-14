import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Route GET sur /');
});

router.post('/login', (req, res) => {
    console.log(req.body)

    const username = req.body.username;
    const password = req.body.password;

    // Vérifier les identifiants (exemple simplifié)
    if (username === 'utilisateur' && password === 'motdepasse') {
        res.send('Connexion réussie !');
    } else {
        res.status(401).send('Identifiants incorrects');
    }
});


export {router};