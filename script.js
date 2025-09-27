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
                <img src="${product.img}" alt="" class="image">
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
            window.location.href = "product-details.html"
        })
    })
}

function displayProductDetail () {
    const productData = JSON.parse(sessionStorage.getItem("selectedProduct"))

    const titleEl = document.querySelector(".name")
    const priceEl = document.querySelector(".price")
    const descriptionEl = document.querySelector(".description")
    const headNoteEl = document.querySelector(".headNote")
    const heartNoteEl = document.querySelector(".heartNote")
    const baseNoteEl = document.querySelector(".baseNote")
    const addToCartBtn = document.querySelector("#add-cart")

    titleEl.textContent = productData.name
    priceEl.textContent = productData.price
    descriptionEl.textContent = productData.description
    headNoteEl.textContent = productData.notes.headNote
    heartNoteEl.textContent = productData.notes.heartNote
    baseNoteEl.textContent = productData.notes.baseNote

    addToCartBtn.addEventListener("click", () => {
        // addToCart(productData)
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
    for (let items of cartItems) {
        if (items.textContent === productTitle) {
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
    `
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

    })
    updateCartCount(1)
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
