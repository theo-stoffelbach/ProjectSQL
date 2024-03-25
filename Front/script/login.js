console.log("login.js loaded");

const createToken = (key, value, day) => {
    let date = new Date();
    date.setTime(date.getTime() + (day * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
}


//create function to validate the login form
const validateLoginForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })
        .then(r => r.json())
        .then(response => {
            createToken("userId", response.id_client, 1);
            createToken("username", response.name, 1);
            // window.location.href = "http://localhost:5500/Front/Html/HomePage.html";
        })
        .catch(error => {
            console.log("error : ", error);
            alert("Invalid Credentials");
        });

    return true;
}

document.getElementById("loginForm").addEventListener("submit", validateLoginForm);