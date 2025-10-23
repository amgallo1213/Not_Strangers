/* -------------------------- OPEN AND CLOSE MOBILE NAV ------------------------------------ */

const openMobileNav = () => {
    const openNav = document.querySelector(".mobile-menu")
    openNav.classList.add("fade-in")
    openNav.style.display = "block"

    const overflow = document.querySelector("body")
    overflow.style.overflow = "hidden"
}

const closeMobileNav = () => {
    const closeNav = document.querySelector(".mobile-menu")
    closeNav.classList.add("fade-out")
    closeNav.style.display = "none"

    const burgerMenuIcon = document.querySelector("#burger-menu-icon")
    burgerMenuIcon.style.display = ""

    const overflow = document.querySelector("body")
    overflow.style.overflow = ""
}



/* --------------------------  ADD PRODUCTS FROM FILE ------------------------------------ */


const isProductDetailPage = document.querySelector(".product-detail")

const productList = document.querySelector("#product-list")
const cartCount = document.querySelector(".cart-item-count")
const cartTotal = document.querySelector(".cart-total-price")
const cartItemsContainer = document.querySelector(".cart-content")

const cartIcon = document.querySelector("#cart-icon")
const panda = document.querySelector(".panda")
const cartClose = document.querySelector("#cart-close")

const buyNowButton = document.querySelector(".cart-checkout-btn")

// const numberElement = document.querySelector(".number")
// const decrementButton = document.querySelector("#decrement")

cartIcon.addEventListener("click", () => panda.classList.add("active"))
cartClose.addEventListener("click", () => panda.classList.remove("active"))

let cart = []
let cartItemCount = 0


// Display products
function displayProducts() {
    products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `

        <div class="img-box">
                <img src="${product.img}" alt="" class="product-image">
            </div>
            <h2 class="product-title">${product.name}</h2>
            <div class="price-and-cart">
                <span class="dollars cart-price">$${product.dollars}</span>
                <button class="shop-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>

    `;
        productList.appendChild(div);

        const imgBox = div.querySelector(".img-box")
        imgBox.addEventListener("click", () => {
            sessionStorage.setItem("selectedProduct", JSON.stringify(product))
            window.location.href = "../product-details/product-details.html"
        })
    });
}



/* --------------------------  DISPLAY INDIVIDUAL PRODUCT ON PAGE ------------------------------------ */


function displayProductDetail (id) {
    const productData = JSON.parse(sessionStorage.getItem("selectedProduct"))

    const titleEl = document.querySelector(".name")
    const imgEl = document.querySelector(".product-detail-image")
    const crumbNameEl = document.querySelector(".crumbName")
    const priceEl = document.querySelector(".dollars")
    const descriptionEl = document.querySelector(".description")
    const headNoteEl = document.querySelector(".head")
    const heartNoteEl = document.querySelector(".heart")
    const baseNoteEl = document.querySelector(".base")

    titleEl.textContent = productData.name
    imgEl.src = productData.img
    crumbNameEl.textContent = productData.name
    priceEl.textContent = productData.dollars
    descriptionEl.textContent = productData.description
    headNoteEl.textContent = productData.notes[0].head
    heartNoteEl.textContent = productData.notes[0].heart
    baseNoteEl.textContent = productData.notes[0].base

    // updateCart()

}


/* --------------------------  ADD TO CART ------------------------------------ */

// Add to cart
function addToCart(id) {
    const item = products.find(p => p.id === id);
    const existing = cart.find(p => p.id === id);

    if (existing) {
        existing.quantity++;
        updateCartCount(1)
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCartCount(1)
    updateCart();
    incrementDecrement()
}

// Update cart display
function updateCart() {
    let totalItems = 0;
    let totalPrice = 0;

    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.dollars * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            
            <img src="${item.img}" alt="${item.name}" class="cart-img">
            <div class="cart-details">
                <h2 class="cart-product-title">${item.name}</h2>
                <p><span class="cart-price">$${item.dollars}</span></p>
            </div>
            <div class="cart-quantity">
                <button id="decrement">-</button>
                <span class="number">${item.quantity}</span>
                <button id="increment">+</button>
            </div>
            <i class="ri-delete-bin-line cart-remove" onclick="removeFromCart(${item.id})"></i>
            
            `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice;

}


function incrementDecrement() {
    const cartItem = document.querySelector(".cart-quantity").addEventListener("click", event => {
        const numberElement = document.querySelector(".number")
        const decrementButton = document.querySelector("#decrement")

        let quantity = numberElement.textContent

        if (event.target.id === "decrement" && quantity > 1){
            quantity--
            if (quantity === 1) {
                decrementButton.style.color = "#999"
            } 
        } else

        if (event.target.id === "increment") {
            quantity++
            decrementButton.style.color = "#333"
        }
        numberElement.textContent = quantity
        totalPrice = quantity * dollars
        updateTotalPrice()
        updateCart()
    })
    updateTotalPrice()
    updateCart()
}


// Remove from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    updateCartCount(1)
}


// BUY BUTTON IN CART
function buyNow() {
    const cartItems = cartItemsContainer.querySelectorAll(".cart-item")
    if (cartItems.length === 0) {
        alert("Your cart is empty. Please continue shopping.")
        return
    }
    cartItems.forEach(cartItem => cartItem.remove())
    cartItemCount = 0
    cartTotal.textContent = "0"
    updateCartCount(0)
    alert("Thank you for shopping with us")
}


// Number of items in cart

const updateCartCount = change => {
    const cartItemCountBadge = document.querySelector(".cart-item-count")
    cartItemCount += change
    if (cartItemCount > 0){
        cartItemCountBadge.style.visibility = "visible"
        cartItemCountBadge.textContent = cartItemCount
    } else {
        cartItemCountBadge.style.visibility = "hidden"
        cartItemCountBadge.textContent = ""
    }
}


// Initialize

if (productList) {
    displayProducts()
} else if (isProductDetailPage) {
    displayProductDetail()
}



