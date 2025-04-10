function addition () {
    let a = 5;
    let b = 3;

    console.log(a + b);
}

function substraction (a , b) {
    console.log(a - b);
}

function multiplication () {
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