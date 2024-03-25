const getCookieByName = (name) => {
    const cookie = document.cookie.split(";");
    let result = null;
    cookie.forEach((element) => {
        if (element.includes(name)) {
            console.log(element, 'element');
            console.log("yes");
            result = element.split("=")[1];
            return element;
        }
    });
    if (result === null) {
        console.log("no");
        return null;
    }
    return result;
}

const init = () => {
    const userId = getCookieByName('userId');

    console.log(userId);

    fetch(`http://localhost:3000/api/user/profil/${userId}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data)
            
            const profilName = document.getElementById('title');
            profilName.innerText = data.user.name;

            // Get the 'Historique' div
            const historiqueDiv = document.querySelector('.Historique');

            // For each command, create a 'Commande' div and add it to the 'Historique' div
            console.log(data.command);
            data.command.forEach(command => {
                const commandeDiv = document.createElement('div');
                commandeDiv.className = 'Commande';

                const h1 = document.createElement('h1');
                h1.textContent = `Restaurant: ${command.name}`;
                commandeDiv.appendChild(h1);

                // const platP = document.createElement('p');
                // platP.textContent = `Plat: ${command.id_list_meal}`;
                // commandeDiv.appendChild(platP);

                const prixP = document.createElement('p');
                prixP.textContent = `Adresse: ${command.delivery_adress}`;
                commandeDiv.appendChild(prixP);

                // const dateP = document.createElement('p');
                // dateP.textContent = `Date: ${command.ordered_time}`;
                // commandeDiv.appendChild(dateP);

                // const etatP = document.createElement('p');
                // etatP.textContent = `Etat: ${command.command_state}`;
                // commandeDiv.appendChild(etatP);


                historiqueDiv.appendChild(commandeDiv);
            })
        })
}

init();
