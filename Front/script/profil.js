const cookie = document.cookie
const profilName = document.getElementById('title');
const userId = cookie.split(";")[0].split("=")[1];

const init = () => {
    console.log
    console.log(userId);

    fetch(`http://localhost:3000/api/user/profil/${userId}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data)
            profilName.innerText = data.user.name;


            // Get the 'Historique' div
            const historiqueDiv = document.querySelector('.Historique');

            // For each command, create a 'Commande' div and add it to the 'Historique' div
            console.log(data.command);
            data.command.forEach(command => {
                const commandeDiv = document.createElement('div');
                commandeDiv.className = 'Commande';

                const h1 = document.createElement('h1');
                h1.textContent = `Restaurant: ${command.restaurant}`;
                commandeDiv.appendChild(h1);

                const platP = document.createElement('p');
                platP.textContent = `Plat: ${command.plat}`;
                commandeDiv.appendChild(platP);

                const prixP = document.createElement('p');
                prixP.textContent = `Adresse: ${command.delivery_adress}`;
                commandeDiv.appendChild(prixP);

                const dateP = document.createElement('p');
                dateP.textContent = `Date: ${command.ordered_time}`;
                commandeDiv.appendChild(dateP);

                const etatP = document.createElement('p');
                etatP.textContent = `Etat: ${command.command_state}`;
                commandeDiv.appendChild(etatP);



                historiqueDiv.appendChild(commandeDiv);
            })
        })
}


init();
