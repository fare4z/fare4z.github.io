function changeBlue() {
    document.getElementById('box').style.background="lightblue";
    document.getElementById('box').style.fontSize="20px";
    document.getElementById('box').style.color="black";
}

function changeRed() {
    document.getElementById('box').style.background="red";
    document.getElementById('box').style.fontSize="20px";
    document.getElementById('box').style.color="white";
}

function addItem() {
    let newmenu = prompt("Enter menu name");

    let newItem = document.createElement("li");
    newItem.innerText = newmenu;
    document.getElementById('list').appendChild(newItem);
}

function orderFood() {
    let checked_menu = document.querySelectorAll('input[type=checkbox]:checked')

    let info = document.getElementById('info');
    let priceInfo = document.getElementById('priceInfo');

    let checked_values = [];
    let price = 0;
    checked_menu.forEach(function (checkbox) {
        if (checkbox.value == "nasi ayam") {
            price += 10;
        } else if (checkbox.value == "mee goreng") {
            price += 8;
        } else if (checkbox.value == "nasi lemak") {
            price += 12;
        } else if (checkbox.value == "roti canai") {
            price += 5;
        }
        
        checked_values.push(checkbox.value);
    })

    info.innerHTML = "<h2>Receipt</h2>" + checked_values.join(", ") + "<br>";
    info.innerHTML += "<h3>Thank you for your order!</h3>";
    priceInfo.innerHTML = "<strong>Total Price : RM " + price + "\n </strong>";


}

let btnKlik = document.getElementById('klik');

btnKlik.onclick = function() {
    alert('Button ditekan');
}

let txtWelcome = document.getElementById('welcome');

txtWelcome.onmouseover = function() {
    txtWelcome.innerText = "Selamat Datang";
}

txtWelcome.onmouseout = function() {
    txtWelcome.innerText = "Welcome";
}

let kucing = document.getElementById('kucing');

kucing.onmouseover = function() {
    this.src = "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg";

    this.style.filter = "blur(0px)";
    this.style.transform = "scale(2)"
    this.style.transition = "transform 0.5s ease-in-out"

}

kucing.onmouseout = function() {
    this.src = "https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg";

    this.style.filter = "blur(2px)";
    this.style.transform = "scale(1)"
}

function checkJabatan () {
    let jabatan = document.getElementById('jabatan');
    let selectedJabatan = jabatan.options[jabatan.selectedIndex].value;

    alert("You have selected : " + selectedJabatan);
    console.log(selectedJabatan);
}

