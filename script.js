// function openNav(x) {
//     document.getElementById("nav_wrapper").style.height = "30%";

// }

// function closeNav(x) {
//     document.getElementById("nav_wrapper").style.height = "0%"
// }

function on () {
    const turnOn = document.getElementById("overlay")
    turnOn.classList.add("fade-in")
    turnOn.style.display = "block"

    const overflow = document.querySelector("body")
    overflow.style.overflow = "hidden"
}

function off () {
    const turnOff = document.getElementById("overlay")
    // turnOff.classList.remove("fade-in")
    turnOff.style.display = "none"

    const overflow = document.querySelector("body")
    overflow.style.overflow = ""
}


const cart = {}

function addToCart (productName, productPrice) {
    if (cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += productPrice;
    } else {
        cart[productName] = {
            quantity: 1,
            totalPrice: productPrice
        };
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    for (let product in cart) {
        const listItem = document.createElement('li');
        listItem.innerText = `${product} - Quantity: ${cart[product].quantity} - Total Price: ${cart[product].totalPrice.toFixed(2)}`;
        cartList.apppendChild(listItem);
    }
}




          
