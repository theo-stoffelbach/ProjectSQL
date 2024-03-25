const titleRestaurant = document.getElementById('title');
const listMeals = document.getElementsByClassName('Ingredients')[0];
const listLocalStorage = document.getElementById("listbuy")
const passCommandButton = document.getElementById("buy")

function createMealCard(meal, ingredients) {
    const div = document.createElement('div');
    div.className = 'Ingredient';

    const h1 = document.createElement('h1');
    h1.textContent = meal;

    const ingredisntsBalise = document.createElement('p');
    ingredisntsBalise.innerText = "Ingrédients :";

    const p = document.createElement('p');
    p.textContent = ingredients;

    div.appendChild(h1);
    div.appendChild(ingredisntsBalise);
    div.appendChild(p);

    return div;

}


const init = () => {
    const data = JSON.parse(localStorage.getItem('restaurant'));


    fetch('http://localhost:3000/api/restaurant/' + data.id)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            titleRestaurant.innerText = data.restaurant.name;

            const meals = data.meals;

            meals.forEach(meal => {
                const card = createMealCard(meal.name, meal.ingredients);
                listMeals.appendChild(card);

                card.addEventListener('click', () => {
                    addMealToList(meal);
                    printListLocalStorage();
                });
            })
        });
    console.log(data)

}

const addMealToList = (meal) => {
    let mealsList = JSON.parse(localStorage.getItem('mealsList')) || [];
    mealsList.push(meal);
    localStorage.setItem('mealsList', JSON.stringify(mealsList));
    console.log('Meal added to list:', meal);
}

// const data = localStorage.getItem('restaurant');
//
// console.log('test name' + JSON.parse(data).name);

<<<<<<< Updated upstream
init();




document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const comment = document.getElementById('comment-input').value;
    fetch('http://localhost:3000/api/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id_comment: 1,
            id_command: 1,
            id_client: 1,
            comment_text: comment,
            id_restaurant: 1
         })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});

router.post('/api/comment', function(req, res) {
    commentService.addComment(req.body.comment)
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: error.message }));
});
=======
function printListLocalStorage() {
    const listCommand = JSON.parse(localStorage.getItem("mealsList"));
    console.log(listCommand)
    listLocalStorage.innerHTML = "";

    listCommand.forEach(meal => {
        const li = document.createElement('li');
        li.innerText = meal.name;

        listLocalStorage.appendChild(li);
    })
}

function resetLocalStorage() {
    localStorage.removeItem('mealsList');
    console.log("remove local")
}

function submitCommand() {
    const listCommnad = JSON.parse(localStorage.getItem("mealsList"));
    const restaurant = JSON.parse(localStorage.getItem("restaurant"));
    const cookie = document.cookie
    const clientId = Number.parseInt(cookie.split(";")[0].split("=")[1]);
    let listIdCommand = [];

    listCommnad.forEach(meal => {
        listIdCommand.push(meal.id_meal)
    })

    console.log("Command : ", listIdCommand);
    console.log("clientId : ", clientId);
    console.log("restaurantId : ", restaurant.id);
    fetch("http://localhost:3000/api/command", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_user: clientId,
            id_restaurant: restaurant.id,
            adress: "test",
            meals: listIdCommand
        }),
    })
        .then(r => r.json())
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log("error : ", error);
            alert("Invalid Credentials");
        });
}

passCommandButton.addEventListener("click", () => {
    console.log("buy");
    submitCommand();

})

resetLocalStorage();
init();
>>>>>>> Stashed changes
