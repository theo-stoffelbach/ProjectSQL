const titleRestaurant = document.getElementById('title');
const listMeals = document.getElementsByClassName('Ingredients')[0];

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
            })
        });

    console.log(data)
}


// const data = localStorage.getItem('restaurant');
//
// console.log('test name' + JSON.parse(data).name);

init();