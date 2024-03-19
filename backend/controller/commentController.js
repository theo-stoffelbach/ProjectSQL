const readAllCommentByRestaurant = (req, res) => {

}

const createCommentInResaurant = (req, res) => {
    const id_restaurant = req.params.id;
    let result = {};
    console.log(id_restaurant)
    selectByIdRestaurant(id_restaurant)
        .then((dataRestaurant) => {
            result.restaurant = dataRestaurant

            selectAllMealByIdRestaurant(id_restaurant)
                .then(dataMeal => {
                    result.meals = dataMeal;
                    console.log(result);
                    res.status(200).send(result);
                })
        })
        .catch((error) => {
            console.log(error);
        });
}

export {readAllRestaurants, readByIdRestaurant};