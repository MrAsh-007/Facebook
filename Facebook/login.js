// Login Page

function logInCredintials(e) {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    e.preventDefault();

    if (email.value.trim() == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter an Email",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    } 
    if (password.value.trim() == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter Correct Password",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    } 
    else {
        window.location.href = "http://127.0.0.1:5500/dashboard.html";
    }
}

