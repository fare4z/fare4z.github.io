function addition() {
    let a = 5;
    let b = 3;

    console.log(a + b);
}

function substraction(a, b) {
    console.log(a - b);
}

function multiplication() {
    let a = 2;
    let b = 5;

    let result = a * b;

    // increment operator
    // result++;

    // decrement operator
    result--;

    console.log(result);

}

//  Decrement operator
function countDown() {
    let countdown = 10;

    while (countdown > 0) {
        console.log("Countdown " + countdown);
        countdown++;
    }
}

function login() {

    let username = prompt("Enter your username");
    let password = prompt("Enter your password");

    if ((username == "fareez" && password == "123456") || (username == "admin" && password == "123456")) {
        console.log("Success");
        alert("Welcome " + username);
    } else {
        console.log("Wrong username");
        alert("Wrong username or password");
    }

}
