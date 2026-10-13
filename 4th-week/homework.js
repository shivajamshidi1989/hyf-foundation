// Assignment Number 2
function getFullName(firstName, surname){
    if(firstName && surname){
        console.log(`Fullname is ${firstName} ${surname}`);
    }
    else{
        console.log(`First name or surname is missing! Please check again`);
    }
}

getFullName("Benjamin", "Hughes");


function getFullName(firstName, surname,useFormalName){
   if(firstName && surname){
    if(useFormalName){
        console.log( `Full name is Lord ${firstName} ${surname}`   );
    }
    else{
     console.log(`Fullname is ${firstName} ${surname}`);
    }
    }
    else{
        console.log(`First name or surname is missing! Please check again`);
    }
}

getFullName("Benjamin", "Hughes", true);
getFullName("Benjamin", "Hughes", false);
getFullName("", "");


function getFullName(firstName, surname,useFormalName, isFemale){
   if(firstName && surname){
    if(useFormalName){
        if(isFemale){
        console.log( `Full name is Miss ${firstName} ${surname}`   );
        }
        else{
        console.log( `Full name is Lord ${firstName} ${surname}`   );
        }
    }
    else{
     console.log(`Fullname is ${firstName} ${surname}`);
    }
    }
    else{
        console.log(`First name or surname is missing! Please check again`);
    }
}

getFullName("Benjamin", "Hughes", true, false);
getFullName("Shiva", "Jamshidi", true, true);

// Assignment Number 3:

const weekDays=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today= new Date().getDay()
const daysUntilEvent= Number;
function getEventWeekday(daysUntilEvent){
    const eventDay = (today + daysUntilEvent) % 7;
    return weekDays[eventDay];
}

console.log(getEventWeekday(2));
console.log(getEventWeekday(14));

// Assignment Number 4:

function clothesToWear(Number){
    if(Number <=0){
        console.log(`Winter jacket with warm hat and gloves and boots`);
    }
  if(Number <10){
        console.log(`Winter jacket is enough`);
    }
      if(Number <20){
        console.log(`T-shirts`);
    }
    else{
        console.log(`Top and shorts`);
    }
}

clothesToWear(23)


// Assignment Number 5:

const class07Students = [];

function addStudentToClass(studentName) {
       if (studentName === "") {
        return;
    }
        if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
        return;
    }
    if(studentName === "Queen"){
     class07Students.push(studentName) ;
     return;
    }
    if(class07Students.length<6){
    class07Students.push(studentName)
    }
    else{
        console.log(`Cannot add more students to class 07`);
    }
}

function getNumberOfStudents() {
     return class07Students.length;
}

addStudentToClass("Benjamin");
addStudentToClass("Anna");
addStudentToClass("Peter");
console.log(class07Students);

addStudentToClass("Benjamin");
addStudentToClass("");

addStudentToClass("Sara");
addStudentToClass("Shiva");
addStudentToClass("Eli");
console.log(getNumberOfStudents());

addStudentToClass("Michael");
addStudentToClass("Queen");
console.log(class07Students);
console.log(getNumberOfStudents());