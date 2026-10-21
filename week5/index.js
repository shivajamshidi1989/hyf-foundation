const myProfile = {
    name: "shiva",
    age: 37,
    skills:[
        "ux designer", "frontend developer"
    ]
}
console.log(myProfile.name);
console.log(myProfile["name"]);

const myAge=myProfile.age
console.log(myAge);
myProfile.city= "copenhagen"
myProfile.age= 38

console.log(myProfile);
delete myProfile.city;
console.log(myProfile);

