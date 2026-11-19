const productOne = { name: "mobile", price: 2000, inStock: true };
const productTwo = { name: "laptop", price: 5000, inStock: false };
const productThree = { name: "surface", price: 3000, inStock: true };

const arrayOfProducts = [];
arrayOfProducts.push(productOne, productTwo, productThree);

for (let i = 0; i < arrayOfProducts.length; i++) {
  const item = arrayOfProducts[i];
  console.log(
    `The product name is ${item.name} and the price is ${item.price}`,
  );

  if (item.inStock) {
    console.log(`${item.name} is in stock`);
  }
}
