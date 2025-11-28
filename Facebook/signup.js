// Signup Page


function signUpCredintials(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let gender = document.querySelector('input[name="gender"]:checked')?.id;

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;








    console.log(`firstname ${firstName}`);
    console.log(`lastname ${lastName}`);

    console.log(`DOB ${day} ${month} ${year}`);

    console.log(`Gender ${gender}`);

    console.log(`email ${email}`);
    console.log(`password ${password}`);
}