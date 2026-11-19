names = ["Amina", "Emil", "Zoey", "Ahmad"];
console.log(names);

const index = names.indexOf;
const nameToRemove = "Zoey";
console.log(names);

if (index !== -1) {
  names.splice(index, 1);
}
console.log(names);
