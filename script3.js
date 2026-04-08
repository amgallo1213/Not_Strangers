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

/* --------------------------  DISPLAY INDIVIDUAL PRODUCT ON PAGE ------------------------------------ */

const isProductDetailPage = document.querySelector(".product-detail")

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

}


/* --------------------------  ADD PRODUCTS FROM FILE ------------------------------------ */

const productList = document.querySelector("#product-list")

function displayProducts() {
    products.forEach(product => {
        const div = document.createElement('div')
        div.classList.add('product')
        div.innerHTML = `

            <div class="img-box">
                <img src="${product.img}" alt="product-image" class="product-image">
            </div>
            <h2 class="product-title"> 
                ${product.name}
            </h2>
            <div class="price-and-cart>
                <span class="product-price">$${product.dollars}</span> 
                <button class="shop-btn" onclick="addItemToCart(${product.id})">Add to Cart</button>            
            </div>
        `
        productList.appendChild(div)

        const imgBox = div.querySelector(".img-box")
        imgBox.addEventListener("click", () => {
            sessionStorage.setItem("selectedProduct", JSON.stringify(product))
            window.location.href = "../product-details/product-details.html"
        })

    })
}

// displayProducts(productList)

/* --------------------------  OPEN AND CLOSE CART ------------------------------------ */

const cartIcon = document.querySelector("#cart-icon")
const displayShoppingCart = document.querySelector(".shoppingCart")
const cartClose = document.querySelector("#cart-close")

cartIcon.addEventListener("click", () => displayShoppingCart.classList.add("active"))
cartClose.addEventListener("click", () => displayShoppingCart.classList.remove("active"))

/* --------------------------  ADD PRODUCTS TO CART ------------------------------------ */

const cartContents = document.querySelector(".cart-contents")
const cartCount = document.querySelector(".cart-item-count")
const cartTotal = document.querySelector(".total-price")

// const cartItemsContainer = document.querySelector(".cart-content")

// const decrementButton = document.getElementById("#decrement")
// decrementButton.addEventListener("click", removeFromCart)


let cart = []
let cartItemCount = 0


function addItemToCart(id) {
    const item = products.find(item => item.id === id)
    const existing = cart.find(item => item.id === id)

    if (existing) {
        existing.quantity++
    } else {
        cart.push({ ...item, quantity: 1 })
    }
    updateCart()
    updateCartCountBadge(1)

}

function updateCart() {
    let totalItems = 0
    let totalPrice = 0

    cartContents.innerHTML = ''

    cart.forEach(product => {
        totalItems += product.quantity
        totalPrice += product.dollars * product.quantity
        
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart-item')
        cartItem.innerHTML = `

            <img src="${product.img}" alt="image of + ${product.name}" class="cart-img">
            <div class="cart-details">
                <h2 class="cart-product-title">${product.name}</h2>
                <p class="price-in-cart">$${product.dollars}</p>
            </div>
            <div class="cart-quantity">
                <button id="decrement" onclick="decrement()">-</button>
                <span class="number" >${product.quantity}</span>
                <button id="increment">+</button>
            </div>
            <i class="ri-delete-bin-line cart-remove" onclick="removeFromCart(${product.id})"></i>

        `
        cartContents.appendChild(cartItem)

    })
    
    cartTotal.textContent = totalPrice;
    cartCount.textContent = totalItems;
}


// REMOVE FROM CART

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id)
    updateCart()
    updateCartCountBadge(-1)
}


// Number of items in cart
const updateCartCountBadge = change => {
    const cartItemCountBadge = document.querySelector(".cart-item-count")
    cartItemCount += change
    if (cartItemCount > 0){
        cartItemCountBadge.style.visibility = "visible"
        cartItemCountBadge.textContent = cartItemCount
    } else if (cartItemCount === 0) {
        cartItemCountBadge.style.visibility = "hidden"
        cartItemCountBadge.textContent = ""
    }
}

// BUY BUTTON IN CART

const buyButton = document.querySelector(".cart-checkout-btn")
buyButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert ("your cart is empty")
        return
    } else {
        cart = cart.pop(document.querySelectorAll(".cart-item"))
        totalPrice = 0 //this does not work
        alert("thank you for shopping with us")
        // updateCartCountBadge()
    }
    updateCart()
    removeFromCart()
    updateCartCountBadge() // this does not work
})


// Initialize

if (productList) {
    displayProducts()
} else if (isProductDetailPage) {
    displayProductDetail()
}