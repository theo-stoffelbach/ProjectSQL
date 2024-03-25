const readAllCommentByRestaurant = (req, res) => {
    commentSelectAll()
        .then((dataComments) => {
            if (dataComments === undefined) {
                res.status(401).send('Identifiants incorrects');
            } else {
                res.status(200).send({dataComments});
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

const createCommentInResaurant = (req, res) => {
    const id_restaurant = req.params.id;
    const commentText = req.params.id;
    const id_user = req.params.id;

    console.log(id_restaurant)


}

export {readAllRestaurants, readByIdRestaurant};