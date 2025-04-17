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


function markah() {
    var markahPenuh = 50;
    let markah1 = prompt("Enter markah 1");
    let markah2 = prompt("Enter markah 2");
    let markah3 = prompt("Enter markah 3");

    var markahLabtask = {
        items: [
            { criteria: "TASK 1", marks: Number(markah1) },
            { criteria: "TASK 2", marks: Number(markah2) },
            { criteria: "TASK 3", marks: Number(markah3) }
        ],
        total: 0
    };

    // Calculate the total marks using += operator
    for (var i = 0; i < markahLabtask.items.length; i++) {
        markahLabtask.total += markahLabtask.items[i].marks;
    }
    // Calculate percentage
    var percent = markahLabtask.total / markahPenuh * 100

    console.log("Total Marks : " + markahLabtask.total);
    console.log("Percentage : " + percent)
}


function checkPassword() {

    let password = prompt("Please enter your password");
    let attempt = 0;

    if (Number(password)) {

        if (password.length >= 8) {
            console.log("Strong password");
        } else {
            console.log("Weak Password");
            
        }
        
    } else {
        console.log("Enter number only");
    }

}

function loginLogic() {
    let username = prompt("Enter your username");
    let password = prompt("Enter your password");

    let attempt = 0;
    let maxAttempts = 3;
    let isLoggedIn = false;

    while (attempt < maxAttempts && !isLoggedIn) {
        if (username == "fareez" && password == "123456") {
            console.log("Success");
            alert("Welcome " + username);
            isLoggedIn = true;
        } else {
            console.log("Wrong username or password. Try again.");
            attempt++;
            username = prompt("Enter your username");
            password = prompt("Enter your password");
        }
    }
    if (attempt == maxAttempts) {
        console.log("Maximum attempts reached. Please try again later.");
    }
}

loginLogic();