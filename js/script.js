const productContainer = document.getElementById("product-container");
const searchBox = document.getElementById("searchBox");

let allProducts = [];


// Load Products

fetch("products/products.json")
.then(response => response.json())
.then(products => {

    allProducts = products;

    displayProducts(allProducts);

})
.catch(error => {

    console.log("Product loading error:", error);

});




// Display Products

function displayProducts(products){

    productContainer.innerHTML = "";


    products.forEach(product => {


        const productCard = document.createElement("div");

        productCard.className = "product-item";


        productCard.innerHTML = `

            <a href="${product.link}" target="_blank">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

            </a>

        `;


        productContainer.appendChild(productCard);


    });


}




// Search Function

searchBox.addEventListener("input", function(){


    const searchText = this.value.toLowerCase();


    const filteredProducts = allProducts.filter(product =>

        product.name.toLowerCase().includes(searchText)

    );


    displayProducts(filteredProducts);


});