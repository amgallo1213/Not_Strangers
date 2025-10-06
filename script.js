// NOT STRANGERS SCRIPT

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

const productContainer = document.querySelector(".product-grid-wrapper")
const isProductDetailPage = document.querySelector(".product-detail")

if (productContainer) {
    displayProducts()
} else if (isProductDetailPage) {
    displayProductDetail()
}

function displayProducts() {
    products.forEach(product => {
        const productCard = document.createElement("div")
        productCard.classList.add("product-box")
        productCard.innerHTML =
        `
            <div class="img-box">
                <img src="${product.img}" alt="" class="product-image">
            </div>
            <h2 class="product-title">${product.name}</h2>
            <div class="price-and-cart">
                <span class="price">$${product.price}</span>
                <button class="add-cart btn-buy">Add to Cart</button>
            </div>
        `
        productContainer.appendChild(productCard)

        const imgBox = productCard.querySelector(".img-box")
        imgBox.addEventListener("click", () => {
            sessionStorage.setItem("selectedProduct", JSON.stringify(product))
            window.location.href = "../product-details/product-details.html"
        })
    })
}

function displayProductDetail () {
    const productData = JSON.parse(sessionStorage.getItem("selectedProduct"))

    const titleEl = document.querySelector(".name")
    const imgEl = document.querySelector(".product-detail-image")
    const crumbNameEl = document.querySelector(".crumbName")
    const priceEl = document.querySelector(".price")
    const descriptionEl = document.querySelector(".description")
    const headNoteEl = document.querySelector(".head")
    const heartNoteEl = document.querySelector(".heart")
    const baseNoteEl = document.querySelector(".base")
    const addToCartBtn = document.querySelector(".add-cart")

    titleEl.textContent = productData.name
    imgEl.src = productData.img
    crumbNameEl.textContent = productData.name
    priceEl.textContent = productData.price
    descriptionEl.textContent = productData.description
    headNoteEl.textContent = productData.notes[0].head
    heartNoteEl.textContent = productData.notes[0].heart
    baseNoteEl.textContent = productData.notes[0].base

    addToCartBtn.addEventListener("click", () => {
        addToCart()
    })
}


/* --------------------------  CART ------------------------------------ */

const cartIcon = document.querySelector("#cart-icon")
const cart = document.querySelector(".cart")
const cartClose = document.querySelector("#cart-close")

cartIcon.addEventListener("click", () => cart.classList.add("active"))
cartClose.addEventListener("click", () => cart.classList.remove("active"))


const addCartButtons = document.querySelectorAll(".add-cart")
addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-box")
        addToCart(productBox)
    })
})

const cartContent = document.querySelector(".cart-content")

const addToCart = productBox => {
    const productImgSource = productBox.querySelector("img").src
    const productTitle = productBox.querySelector(".product-title").textContent
    const productPrice = productBox.querySelector(".price").textContent

    const cartItems = cartContent.querySelectorAll(".cart-product-title")
    for (let item of cartItems) {
        if (item.textContent === productTitle) {
            alert("Already added to cart")
            return
        }
    }

    const cartBox = document.createElement("div")
    cartBox.classList.add("cart-box")
    cartBox.innerHTML =
        `
        <img src="${productImgSource}" alt="" class="cart-img">
        <div class="cart-details">
            <h2 class="cart-product-title">${productTitle}</h2>
            <span class="cart-price">${productPrice}</span>
            <div class="cart-quantity">
                <button id="decrement">-</button>
                <span class="number">1</span>
                <button id="increment">+</button>
            </div>
        </div>
        <i class="ri-delete-bin-line cart-remove"></i>
    `;
    cartContent.appendChild(cartBox)

    cartBox.querySelector(".cart-remove").addEventListener("click", () => {
        cartBox.remove()
        updateCartCount(-1)
        updateTotalPrice()
    })

    cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
        const numberElement = cartBox.querySelector(".number")
        const decrementButton = cartBox.querySelector("#decrement")

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
        updateTotalPrice()
    })
    updateCartCount(1)
    updateTotalPrice()
}

const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price")
    const cartBoxes = document.querySelectorAll(".cart-box")

    let total = 0
    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector(".cart-price")
        const quantityElement = cartBox.querySelector(".number")
        const price = priceElement.textContent.replace("$", "")
        const quantity = quantityElement.textContent
        total += price * quantity
    })
    totalPriceElement.textcontent = `$${total}`
}


let cartItemCount = 0
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


const buyNowButton = document.querySelector(".btn-buy")
buyNowButton.addEventListener("click", () => {
    const cartBoxes = cartContent.querySelectorAll(".cart-box")
    if (cartBoxes.length === 0) {
        alert("Your cart is empty. Please continue shopping.")
        return
    } 
    cartBoxes.forEach(cartBox => cartBox.remove())
    cartItemCount = 0
    updateCartCount(0)
    updateTotalPrice()
    alert("Thank you for your purchase!")
})





