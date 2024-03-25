const RestaurantList = document.getElementById('RestaurantList');

function createCardRestaurant(id, link, name, address) {
    const linkBalise = document.createElement('a');
    linkBalise.href = '#';
    linkBalise.className = 'Resto1';

// Création de l'élément <div> à l'intérieur du lien
    const div = document.createElement('div');

// Création des éléments <h1> et <p> avec leur contenu textuel
    const h1 = document.createElement('h1');
    h1.textContent = name;

    const addressBalise = document.createElement('p');
    addressBalise.textContent = `address : ${address}`;

// Ajout des éléments au <div>
    div.appendChild(h1);
    div.appendChild(addressBalise);

    linkBalise.appendChild(div);

    linkBalise.addEventListener('click', function () {
        localStorage.setItem('restaurant', JSON.stringify({
            link: link,
            id: id,
            name: name,
            address: address
        }));
        window.location.href = 'restaurant.html';
    });

// Ajout du <div> à l'intérieur du lien
    return linkBalise;
}

function getRestaurantList() {
    console.log("getRestaurantList");
    fetch('http://localhost:3000/api/restaurant/')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            data.dataRestaurants.forEach(restaurant => {
                console.log("res : ", restaurant);
                const card = createCardRestaurant(restaurant.id_restaurant, restaurant.link, restaurant.name, restaurant.Adress, restaurant.open);
                RestaurantList.appendChild(card);
            });
        });
}

function resetLocalStorage() {
    localStorage.removeItem('mealsList');
}

resetLocalStorage();
getRestaurantList();

// console.log(RestaurantList)

// const card = createCardRestaurant('http://www.site.com', 'Restaurant Jorgay', '1 rue du restaurant', '12h-14h')
// RestaurantList.appendChild(card);

