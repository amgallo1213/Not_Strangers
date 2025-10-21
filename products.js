const products = [
    {
        "id": 521688,
        "quantity": 1,
        "name": "Beach Witch",
        "img": "../images/beach_witch.jpeg",
        "category": "lighter",
        "bestSeller": true,
        "keyWords": "",
        "notes": [
            { "head": "salt, orange", "heart": "ylang-ylang", "base": "sandalwood" }
        ],
        "dollars": 120,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        "id": 405233,
        "quantity": 1,
        "name": "Humidity Extinguisher",
        "img": "../images/venn.jpg",
        "bestSeller": true,
        "category": "heavier",
        "keyWords": "",
        "notes": [
            { "head": "grapefruit", "heart": "salt", "base": "lemon" }
        ],
        "dollars": 150,
        "size": 30,
        "description" : "In a society where every man is supposed to be endowed more or less with powers which we should call supernatural, it is plain that the distinction between gods and men is somewhat blurred, or rather has scarcely emerged."
        // "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        "id": 324544,
        "quantity": 1,
        "name": "All Inclusive Vibe",
        "img": "../images/Hungry_Water.webp",
        "bestSeller": true,
        "category": "lighter",
        "keyWords": "",
        "notes": [
            { "head": "black currant, basil", "heart": "cinnamon, cypress", "base": "cedar, myrrh" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {

        "id": 623088,
        "quantity": 1,
        "name": "Abandoned Saints",
        "img": "../images/venn.jpg",
        "bestSeller": true,
        "category": "lighter",
        "keyWords": "",
        "notes": [
            { "head": "jasmine, iris", "heart": "tonka bean", "base": "musk" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {

        "id": 115786,
        "quantity": 1,
        "name": "Ibn Sina",
        "img": "../images/Hungry_Water.webp",
        "category": "lighter",
        "keyWords": "",
        "notes": [
            { "head": "rose", "heart": "rose", "base": "amber" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {

        "id": 545861,
        "quantity": 1,
        "name": "Crashing Sexual Traffic",
        "img": "../images/venn.jpg",
        "category": "lighter",
        "keyWords": "",
        "notes": [
            { "head": "", "heart": "", "base": "" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {

        "id": 909261,
        "quantity": 1,
        "name": "Stevie Nick's Piano Tuner",
        "img": "../images/Stevie.jpg",
        "category": "lighter",
        "keyWords": "",
        "notes": [
            { "head": "fig", "heart": "cardamom, toasted coconut", "base": "sandalwood" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {

        "id": 234513,
        "quantity": 1,
        "name": "Lukewarm Champagne",
        "img": "../images/Hungry_Water.webp",
        "category": "lighter",
        "keyWords": "",
        "notes": [
            { "head": "Chrysanthemum, chamomile", "heart": "white tea", "base": "barley, honey" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {

        "id": 780489,
        "quantity": 1,
        "name": "Shogun Assassin",
        "img": "../images/ShogunAssassin.webp",
        "category": "lighter",
        "keyWords": "",
        "notes": [
            { "head": "Bergamot", "heart": "Juniper Berry", "base": "Oakmoss, Patchouli" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        "id": 838487,
        "quantity": 1,
        "name": "Awake Before Dawn",
        "img": "../images/Hungry_Water.webp",
        "category": "heavier",
        "keyWords": "",
        "notes": [
            { "head": "", "heart": "", "base": "" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        "id": 725037,
        "quantity": 1,
        "name": "A Complex Proposition",
        "img": "../images/venn.jpg",
        "category": "heavier",
        "keyWords": "",
        "notes": [
            { "head": "Iso E", "heart": "cassis", "base": "cedarwood" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        "id": 278997,
        "quantity": 1,
        "name": "Scrumptus Precision",
        "img": "../images/Hungry_Water.webp",
        "category": "heavier",
        "keyWords": "",
        "notes": [
            { "head": "", "heart": "", "base": "" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        "id": 43641,
        "quantity": 1,
        "name": "Happy Indeed",
        "img": "../images/venn.jpg",
        "category": "heavier",
        "keyWords": "",
        "notes": [
            { "head": "saffron", "heart": "vanilla", "base": "amber" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        "id": 374871,
        "quantity": 1,
        "name": "Hungry Water",
        "img": "../images/Hungry_Water.webp",
        "category": "heavier",
        "keyWords": "",
        "notes": [
            { "head": "rosemary, thyme", "heart": "lavender, sage", "base": "orange blossom" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        "id": 715360,
        "quantity": 1,
        "name": "All the Swans",
        "img": "../images/venn.jpg",
        "category": "heavier",
        "keyWords": "",
        "notes": [
            { "head": "white grape", "heart": "peony", "base": "sandalwood" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        "id": 295944,
        "quantity": 1,
        "name": "The Little Thief",
        "img": "../images/Hungry_Water.webp",
        "category": "heavier",
        "keyWords": "",
        "notes": [
            { "head": "ginger", "heart": "neroli, jasmine", "base": "vetiver" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        "id": 886241,
        "quantity": 1,
        "name": "Swim Team Birthday Party",
        "img": "../images/Hungry_Water.webp",
        "category": "lighter",
        "keyWords": "",
        "notes": [
            { "head": "chlorine", "heart": "oreos", "base": "musk" }
        ],
        "dollars": 210,
        "size": 30,
        "description" : "In a society where every man is supposed to be endowed more or less with powers which we should call supernatural, it is plain that the distinction between gods and men is somewhat blurred, or rather has scarcely emerged."
    },
    {
        "id": 612458,
        "quantity": 1,
        "name": "Memory is Molecular",
        "img": "../images/venn.jpg",
        "category": "heavier",
        "keyWords": "",
        "notes": [
            { "head": "yuzu", "heart": "jasmine", "base": "moss, vinyl" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },{
        "id": 179366,
        "quantity": 1,
        "name": "Planet of the Oud",
        "img": "../images/Hungry_Water.webp",
        "category": "heavier",
        "keyWords": "",
        "notes": [
            { "head": "violet", "heart": "vanilla", "base": "amber, rose" }
        ],
        "dollars": 150,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
        "id": 632238,
        "quantity": 1,
        "name": "Daft Punk Can't Hurt You",
        "img": "../images/venn.jpg",
        "category": "lighter",
        "keyWords": "",
        "notes": [
            { "head": "blood orange", "heart": "sage", "base": "eucalyptus, tonka" }
        ],
        "dollars": 250,
        "size": 30,
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    }
]