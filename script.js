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


function initialise() {
    fetchData();
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
                        <button class="card-btn product-btn add-cart" id=${id} onclick="addToCart()">Add to Cart</button>
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
                        <button class="card-btn product-btn add-cart" id=${id} onclick="addToCart(${id})">Add to Cart</button>
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
                        <button class="card-btn product-btn add-cart" id=${id} onclick="addToCart(${id})">Add to Cart</button>
                    </div>  
                </div>`
        })
        .join("")
}



// ********************* CART ************************************

const cartIcon = document.querySelector("#cart-icon")
const cart = document.querySelector(".cart")
const cartClose = document.querySelector("#cart-close")

cartIcon.addEventListener("click", () => cart.classList.add("active"))
cartClose.addEventListener("click", () => cart.classList.remove("active"))

