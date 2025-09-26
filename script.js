/* -------------------------- NAV ------------------------------------ */


function openMobileNav() {
    const openNav = document.querySelector(".mobile-menu")
    openNav.classList.add("fade-in")
    openNav.style.display = "block"

    const overflow = document.querySelector("body")
    overflow.style.overflow = "hidden"
}

function closeMobileNav() {
    const closeNav = document.querySelector(".mobile-menu")
    closeNav.classList.add("fade-out")
    closeNav.style.display = "none"

    const burgerMenuIcon = document.querySelector("#burger-menu-icon")
    burgerMenuIcon.style.display = ""

    const overflow = document.querySelector("body")
    overflow.style.overflow = ""
}



// ********************* DATA ************************************

document.addEventListener("DOMContentLoaded", initialise)

let allProducts
let cart = []


function initialise() {
    fetchData();
    openCart()
    closeCart()
}



async function fetchData() {
    // try {
        let response = await fetch("./data.json");
        let data = await response.json();
        allProducts = data
        console.log(data);
        displayProducts(allProducts)
//     } catch (error) {
//         console.error(error)
//     }
}

// fetchData();

function displayProducts(allProducts) {

    const bestSellers = document.querySelector(".best-sellers-card-grid-wrapper")
    allProducts
        .map((product) => {
            const { name, id, price } = product
            if (product.bestSeller === true)
                bestSellers.innerHTML +=

                    `<div class="card" >
                    <div class="card-img-container" >
                        <img src="images/venn.jpg" alt="" class="image">
                    </div>
                    <div class="card-subgrid">
                        <h4 class="card-name">${name}</h4>
                        <p>Eau du Parfum | 50mL </p>
                        <p class="price-span">$${price}</p>
                        <p class="price-span">ID: ${id}</p>
                        <button class="card-btn product-btn" id=${id} onclick="addToCart()">Add to Cart</button>
                    </div>  
                </div>`
        })
        .join("")


    const lighterPerfumes = document.querySelector('.lighter-card-grid-wrapper')
    allProducts
        .map((product) => {
            const { name, id, price } = product
            if (product.category === "lighter")
                lighterPerfumes.innerHTML +=

                    `<div class="card" >
                    <div class="card-img-container" >
                        <img src="images/venn.jpg" alt="" class="image">
                    </div>
                    <div class="card-subgrid">
                        <h4 class="card-name">${name}</h4>
                        <p>Eau du Parfum | 50mL </p>
                        <p class="price-span">$${price}</p>
                        <p class="price-span">ID: ${id}</p>
                        <button class="card-btn product-btn" id=${id} onclick="addToCart(${id})">Add to Cart</button>
                    </div>  
                </div>`
        })
        .join("")

    const heavierPerfumes = document.querySelector('.heavier-card-grid-wrapper')
    allProducts
        .map((product) => {
            const { name, id, price } = product
            if (product.category === "heavier")
                heavierPerfumes.innerHTML +=

                    `<div class="card" >
                    <div class="card-img-container" >
                        <img src="images/venn.jpg" alt="" class="image">
                    </div>
                    <div class="card-subgrid">
                        <h4 class="card-name">${name}</h4>
                        <p>Eau du Parfum | 50mL </p>
                        <p class="price-span">$${price}</p>
                        <p class="price-span">ID: ${id}</p>
                        <button class="card-btn product-btn" id=${id} onclick="addToCart(${id})">Add to Cart</button>
                    </div>  
                </div>`
        })
        .join("")
}



// ********************* CART MODAL ************************************



function openCart() {
    const cartBtn = document.querySelector(".cart-container")
    cartBtn.addEventListener("click", seeModal)
}

function seeModal() {
    const body = document.body
    const cartModal = document.querySelector(".modal")
    cartModal.classList.remove("hide")
    body.classList.add("modal-open")
    // alert("cart opened! Shazam!")
}

function closeCart() {
    const closeBtn = document.querySelector(".closeX")
    closeBtn.addEventListener("click", closeModal)
}

function closeModal() {
    const body = document.body
    const cartModal = document.querySelector(".modal")
    cartModal.classList.add("hide")
    body.classList.remove("modal-open")
    // alert("cart closed! Shazam!")
}




// ********************* CART ************************************



function addToCart(id) {
    const searchCart = cart.find(product => product.id === id)
    if (searchCart) {
        alert("Product already added to cart")
    } else {
        const oldProduct = allProducts.find(product => product.id === id)
        cart.push({ ...oldProduct, quantity: 1 })
    }
    console.log(product.id)
    shoppingCart()
    
}

function shoppingCart() {
    const cartList = document.querySelector("#cart-list")
    const cartTotal = document.querySelector("#cart-total")
    const cartNumber = document.querySelector(".cart-number-container")
    let cartHTML = "";

    cart
        .map((product) => {
            const { name, price, quantity, id } = product;
            cartHTML += `
                <li id="item-container">
                    <div class="cart-title">
                        <h3>${name}</h3>
                    </div>
                    <div class="cart-quantity-container">
                        <p class="cart-price">$${price} price</p>
                        <div class="button-quantity-container">
                            <button class="plus" onclick="increment(${id}, event)">+</button> 
                            <p class="price-span">${quantity}</p>
                            <button class="minus" onclick="decrement(${id}, event)">-</button>
                        </div>
                        <p id="item-total">$${(price * quantity)} price * quantity</p>
                        
                    </div>
                    <div class="remove-cart-item">
                        <i class='bx  bx-trash'  style='color:#00032A' onclick="deleteCartItem(${id}, event)"></i> 
                    </div>
                </li>
            `;
        })
        .join("");
    cartList.innerHTML = cartHTML;

    const itemTotals = document.querySelectorAll("#item-total")
    let sum = 0
    itemTotals.forEach((itemTotal) => {
        const numericValue = itemTotal.innerHTML
        const index = numericValue.indexOf("$")
        sum += Number(numericValue.slice(index + 1));
    });
    cartTotal.innerHTML =
        // sum > 0
        // ? 
        `
            <button id="checkout" onclick="checkout()"> Proceed to Checkout: $${sum}</button>
        `
    // : `No items in your cart`;

    let newSum = 0
    cart.map((product) => {
        newSum += product.quantity
    })

    if (newSum < 1) {
        cartNumber.classList.add("hide")
    } else {
        cartNumber.classList.remove("hide")
        cartNumber.innerHTML = newSum
    }
}


function increment(id) {
    const cartProduct = cart.find((product) => product.id === id)
    if (cartProduct) {
        cartProduct.quantity++
    }
    shoppingCart()
}

function decrement(id) {
    const cartProduct = cart.find((product) => product.id === id)
    if (cartProduct && cartProduct.quantity > 1) {
        cartProduct.quantity--
    }
    shoppingCart()
}

function deleteCartItem(id) {
    cart = cart.filter((product) => product.id !== id)
    shoppingCart()
}

// function checkout() {
//     const checkoutBtn = document.querySelector("#checkout")
//     const cartList = document.querySelector("#cart-list")
//     cart = []
//     shoppingCart()
//     cartList.innerHTML = `<p class="checkout-message">Thank you for your purchase!</p>`
// }