// ********************* MENU FUNCTION ************************************

function on() {
    const turnOn = document.getElementById("overlay")
    turnOn.classList.add("fade-in")
    turnOn.style.display = "block"

    const overflow = document.querySelector("body")
    overflow.style.overflow = "hidden"
}

function off() {
    const turnOff = document.getElementById("overlay")
    // turnOff.classList.remove("fade-in")
    turnOff.style.display = "none"

    const overflow = document.querySelector("body")
    overflow.style.overflow = ""
}


const bestSellers = [
    {
        id : 521688,
        quantity : 1,
        name : "Beach Witch",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "salt, orange", heart : "ylang-ylang", base : "sandalwood"}
        ],
        price : 120,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 405233,
        quantity : 1,
        name : "Humidity Extinguisher",
        category : "heavier",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 324544,
        quantity : 1,
        name : "All Inclusive Vibe",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        
        id : 623088,
        quantity : 1,
        name : "Abandoned Saints",
        category : "lighter",
        bestSeller : true,
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
]

const lighterPerfumes = [
    {
        id : 521688,
        quantity : 1,
        name : "Beach Witch",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "salt, orange", heart : "ylang-ylang", base : "sandalwood"}
        ],
        price : 120,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 789489,
        quantity : 1,
        name : "Shogun Assassin",
        img : "",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 324544,
        quantity : 1,
        name : "All Inclusive Vibe",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 115786,
        quantity : 1,
        name : "Ibn Sina",
        img : "",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 545861,
        quantity : 1,
        name : "Crashing Sexual Traffic",
        img : "",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        
        id : 623088,
        quantity : 1,
        name : "Abandoned Saints",
        category : "lighter",
        bestSeller : true,
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 909261,
        quantity : 1,
        name : "Stevie Nick's Piano Tuner",
        img : "",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 234513,
        quantity : 1,
        name : "Lukewarm Champagne",
        img : "",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
]


const heavierPerfumes = [
    {
        id : 838487,
        quantity : 1,
        name : "Awake Before Dawn",
        img : "",
        category : "heavier",
        keyWords : "",
        notes : [
            {"head" : "", "heart" : "", "base" : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 405233,
        quantity : 1,
        name : "Humidity Extinguisher",
        category : "heavier",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 725037,
        quantity : 1,
        name : "A Complex Proposition",
        img : "",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 278997,
        quantity : 1,
        name : "Scrumptus Precision",
        img : "",
        category : "heavier",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 43641,
        quantity : 1,
        name : "Happy Indeed",
        img : "",
        category : "heavier",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 295944,
        quantity : 1,
        name : "The Little Thief",
        img : "",
        category : "heavier",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 374871,
        quantity : 1,
        name : "Hungry Water",
        img : "",
        category : "heavier",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 715360,
        quantity : 1,
        name : "All the Swans",
        img : "",
        category : "heavier",
        bestSeller : true,
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    }
]


const allPerfumes = [
    {
        id : 324544,
        quantity : 1,
        name : "All Inclusive Vibe",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 521688,
        quantity : 1,
        name : "Beach Witch",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "salt, orange", heart : "ylang-ylang", base : "sandalwood"}
        ],
        price : 120,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 405233,
        quantity : 1,
        name : "Humidity Extinguisher",
        category : "heavier",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 789489,
        quantity : 1,
        name : "Shogun Assassin",
        img : "",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 295944,
        quantity : 1,
        name : "The Little Thief",
        img : "",
        category : "heavier",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 115786,
        quantity : 1,
        name : "Ibn Sina",
        img : "",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 545861,
        quantity : 1,
        name : "Crashing Sexual Traffic",
        img : "",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        
        id : 623088,
        quantity : 1,
        name : "Abandoned Saints",
        category : "lighter",
        bestSeller : true,
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 909261,
        quantity : 1,
        name : "Stevie Nick's Piano Tuner",
        img : "",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 234513,
        quantity : 1,
        name : "Lukewarm Champagne",
        img : "",
        category : "lighter",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 838487,
        quantity : 1,
        name : "Awake Before Dawn",
        img : "",
        category : "heavier",
        keyWords : "",
        notes : [
            {"head" : "", "heart" : "", "base" : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 725037,
        quantity : 1,
        name : "A Complex Proposition",
        img : "",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 278997,
        quantity : 1,
        name : "Scrumptus Precision",
        img : "",
        category : "heavier",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 43641,
        quantity : 1,
        name : "Happy Indeed",
        img : "",
        category : "heavier",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 374871,
        quantity : 1,
        name : "Hungry Water",
        img : "",
        category : "heavier",
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        id : 715360,
        quantity : 1,
        name : "All the Swans",
        img : "",
        category : "heavier",
        bestSeller : true,
        keyWords : "",
        notes : [
            {head : "", heart : "", base : ""}
        ],
        price : 150,
        size : 30,
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    }
]




const bestSellersCard = bestSellers.map(
    (product) => `<div class="card" >
                    <div class="card-img-container" >
                        <img src="images/venn.jpg" alt="" class="image">
                    </div>
                    <div class="card-subgrid">
                        <h4 class="card-name">${product.name}</h4>
                        <p>Eau du Parfum | 50mL </p>
                        <p class="price-span">$${product.price}</p>
                        <button class="card-btn" id=${product.id}>Add to Cart</button>
                    </div>  
                </div>`
)

const bestSellersDiv = document.querySelector('.card-grid-wrapper');
bestSellersDiv.innerHTML = bestSellersCard.join("")



const lighterPerfumesCard = lighterPerfumes.map(
    (product) => `<div class="card" >
                    <div class="card-img-container" >
                        <img src="images/venn.jpg" alt="" class="image">
                    </div>
                    <div class="card-subgrid">
                        <h4 class="card-name">${product.name}</h4>
                        <p>Eau du Parfum | 50mL </p>
                        <p class="price-span">$${product.price}</p>
                        <button class="card-btn" id=${product.id}>Add to Cart</button>
                    </div>  
                </div>`
)

const lighterPerfumesDiv = document.querySelector('.lighter-card-grid-wrapper');
lighterPerfumesDiv.innerHTML = lighterPerfumesCard.join("")




const heavierPerfumesCard = heavierPerfumes.map(
    (product) => `<div class="card" >
                    <div class="card-img-container" >
                        <img src="images/venn.jpg" alt="" class="image">
                    </div>
                    <div class="card-subgrid">
                        <h4 class="card-name">${product.name}</h4>
                        <p>Eau du Parfum | 50mL </p>
                        <p class="price-span">$${product.price}</p>
                        <button class="card-btn" id=${product.id}>Add to Cart</button>
                    </div>  
                </div>`
)

const heavierPerfumesDiv = document.querySelector('.heavier-card-grid-wrapper');
heavierPerfumesDiv.innerHTML = heavierPerfumesCard.join("")






















