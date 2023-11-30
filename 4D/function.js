function checkDob(nric) {

const birthYear = nric.substr(0, 2);
const birthMonth = nric.substr(2, 2);
const birthDay = nric.substr(4, 2);

const firstDigit = parseInt(nric.charAt(0));
let fullyear;
if (firstDigit == 0) {
    fullyear = "20";
} else {
    fullyear = "19";
}

let fullbirthYear = fullyear + birthYear;
console.log(fullbirthYear);
// Combine the century, year, month, and day to form the date of birth
const dob = new Date(`${fullbirthYear}`, birthMonth - 1, birthDay);
document.getElementById("outPutTarikhLahir").innerHTML = dob.toDateString();

const dob2 = new Date(birthYear, birthMonth - 1, birthDay);
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const formattedDob = dob2.toLocaleDateString('en-CA', options);

document.getElementById("tarikhlahir").value = formattedDob;

let currentDate = new Date();
let umur = currentDate.getFullYear() - fullbirthYear;
document.getElementById("umur").value = umur;

}

function checkGender(nric) {
    const checkNRIC = parseInt(nric.charAt(11));
    if (checkNRIC % 2 === 0) {
        jantina = 'Perempuan';
    } else {
        jantina = 'Lelaki';
    }

    autoSelectGender(jantina);

}

function autoSelectGender(gender) {
    
    const lelakiRB = document.getElementById('Lelaki');
    const perempuanRB = document.getElementById('Perempuan');
   
    if (gender === 'Lelaki') {
        lelakiRB.checked = true;
    } else if (gender === 'Perempuan') {
        perempuanRB.checked = true;
    }
}

function checkStr() {
    let string = "POLITEKNIK SEBERANG PERAI";
    let p = string.substr(0,1);
    let s = string.substr(11,1);
    let perai = string.substr(20,1);

    console.log(p);
    console.log(s);
    console.log(perai);
}

function generatePersonalInfo() {
    let nric = document.getElementById("nric").value;

    if (nric.length <= 0) {
        alert("Please enter your IC number");
        return false;
    }

    if (nric.length != 12) {
        alert("Please enter 12 digit only, without dash (-) or space")
        return false;
    }

    checkDob(nric);
    checkGender(nric);
}

function validate_nric() {
    let nric = document.getElementById("nric").value;
    const regex = /^\d{12}$/;
    let nric_msg;


    if (regex.test(nric.trim())) {
        nric_msg = "";
    } else {
        nric_msg = "<span style='color:red'>Please enter 12 digit of NRIC number without dash (-)</span>";
    }

document.getElementById("msgnric").innerHTML = nric_msg;


}