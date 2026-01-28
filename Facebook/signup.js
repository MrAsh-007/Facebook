// Signup Page




let signupbutton = document.getElementById("signupbutton");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let gender = document.getElementsByName("gender");


let email = document.getElementById("email");
let password = document.getElementById("password");






function signUpCredintials() {

    

    
    let userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        day: day.value,
        month: month.value,
        year: year.value,
        email: email.value,
        password: password.value,
    };
    


    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            userObj.gender = gender[i].value;
        }
    }





    let dbData = JSON.parse(localStorage.getItem("users"));
    

    dbData.push(userObj);
    
    

    
    localStorage.setItem("users", JSON.stringify(dbData));
    
    
    
}



signupbutton.addEventListener("click", signUpCredintials);