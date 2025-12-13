// Login Page

function logInCredintials(e) {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    e.preventDefault();

    if (email.value.trim() == "" || password.value.trim() == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else {
        console.log(`Email ${email.value}`);
        console.log(`Password ${password.value}`);
    }
}

