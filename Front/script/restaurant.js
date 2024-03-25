const titleRestaurant = document.getElementById('title');
const listMeals = document.getElementsByClassName('Ingredients')[0];
const listLocalStorage = document.getElementById("listbuy");
const passCommandButton = document.getElementById("buy");
const adressInput = document.getElementById("adressText");

const getCookieByName = (name) => {
    let result = null;
    document.cookie.split(";").forEach((element) => {
        if (element.includes(name)) {
            console.log(element, 'element');
            console.log("yes");
            result = element.split("=")[1];
            return element;
        }
    });
    if (result === null) {
        return null;
    }
    return result;
}

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

document.getElementById('comment-form').addEventListener('submit', function (event) {
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
    const adressText = adressInput.value;
    const userId = getCookieByName("userId");

    
    console.log("userId : ", userId);
    if (adressText === "") {
        alert("Please enter an adress");
        return;
    }
    if (userId === null) {
        alert("Please login or register to buy");
        window.location.href = "login.html";
        return;
    }

    listCommnad.forEach(meal => {
        listIdCommand.push(meal.id_meal)
    })

    console.log("Command : ", listIdCommand);
    console.log("clientId : ", userId);
    console.log("restaurantId : ", restaurant.id);
    fetch("http://localhost:3000/api/command", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_user: clientId,
            id_restaurant: restaurant.id,
            adress: adressText,
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
