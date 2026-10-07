console.log("I love pizza")
const pizzaName = "Margherita"
let pizzaPrice = 80
console.log(`New pizza order: ${pizzaName}. The price of the pizza is ${pizzaPrice} DKK.`)
console.log("New pizza order: " + pizzaName + ". The price of the pizza is " + pizzaPrice + " DKK.")
const numberOfPizzas = 3
let takeAway = true
console.log(`you have ordered ${numberOfPizzas} ${pizzaName} pizzas. 
    The total price is ${numberOfPizzas * pizzaPrice} DKK.
    Take away: ${takeAway}.`)