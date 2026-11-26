const nameOfHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
const button = document.getElementById("button");
const resetButton = document.getElementById("reset");
const input = document.getElementById("input");
const output = document.getElementById("output");

function findHouse() {
    const randomIndex = Math.floor(Math.random() * nameOfHouses.length);
    const house = nameOfHouses[randomIndex];
    output.textContent = `You belong to ${house}!`;
}

function reset() {
    input.value = "";
    output.textContent = "";
}
button.addEventListener("click", findHouse);
resetButton.addEventListener("click", reset);
