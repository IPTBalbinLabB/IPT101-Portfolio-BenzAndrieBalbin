const student_name = "Benz Andrie Balbin";
let student_id = "6719";
let age = "19";
const course = "BSIT";
const studentProfile = {
  student_name,
  student_id,
  age,
  course
};

console.log(studenttProfile);

//The issue in your code is a simple typo in the console.log() statement. You defined the object as studentProfile (with a single 't'), but you are trying to print studenttProfile (with a double 't').
//This will cause a ReferenceError: studenttProfile is not defined.
