const myArray = [{}, {}];

function markStudents(students) {
  for (let i = 0; i < students.length; i++) {
    students[i].isStudent = true;
  }
}

markStudents(myArray);
console.log(myArray);
