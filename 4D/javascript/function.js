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

    info.innerText = checked_values.join(', ');
    priceInfo.innerHTML = "<strong>Total Price : RM " + price + "\n </strong>";

}