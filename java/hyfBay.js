const products= getAvailableProducts()

const productList = document.getElementById("product-list");

function renderProducts(products) {
    for (let i = 0; i < products.length; i++) {
        const productItem = document.createElement("li");
        const productName = document.createElement("h2")
        const productPrice = document.createElement("p")
        productPrice.classList.add("product-price");
        const productRating = document.createElement("p")
        productRating.classList.add("product-rating");

        productName.textContent = products[i].name;
        productPrice.textContent = `Price: ${products[i].price} DKK`;
        productRating.textContent = `Rating: ${products[i].rating}/10`;
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(productRating);
        productList.appendChild(productItem);
    }
}
renderProducts(products);