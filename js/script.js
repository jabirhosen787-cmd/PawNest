const products = [
    {
        name: "Mini Vacuum Cleaner",
        image: "https://via.placeholder.com/300",
        description: "Portable cleaner for keyboard, car and small spaces.",
        link: "#"
    },

    {
        name: "Smart LED Light",
        image: "https://via.placeholder.com/300",
        description: "Create a better atmosphere with smart lighting.",
        link: "#"
    },

    {
        name: "Phone Stand",
        image: "https://via.placeholder.com/300",
        description: "Adjustable phone stand for desk and workspace.",
        link: "#"
    }
];


const container = document.getElementById("product-container");


products.forEach(product => {

    const card = document.createElement("div");

    card.innerHTML = `
    
    <div class="product-card">

        <img src="${product.image}">

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <a href="${product.link}">
        Buy on Amazon
        </a>

    </div>

    `;

    container.appendChild(card);

});