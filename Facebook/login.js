// Login Page

function logInCredintials() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert(`Credintials cant be empty`);
    } else {
        console.log(`Email ${email}`);
        console.log(`Password ${password}`);
    }
}

