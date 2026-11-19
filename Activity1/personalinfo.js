let bsit_students = {
    student1: {
        studentName: "Mexandryll Derder",
        idNumber: "2026-6719",
        yearLevel: 2,
        program: "Information Technology",
        subject1: "Event Driven",
        grade1: 80,
        unit1: 3,
        subject2: "Pathfit",
        grade2: 89,
        unit2: 2,
        subject3: "App Dev",
        grade3: 90,
        unit3: 3,
        subject4: "Arts",
        grade4: 85,
        unit4: 3,
        subject5: "Networking 1",
        grade5: 92,
        unit5: 3,
        subject6: "Integrative Programming Technologies",
        grade6: 88,
        unit6: 3
    },
    student2: {
        studentName: "Angelo Caliging",
        idNumber: "2026-6723",
        yearLevel: 2,
        program: "Information Technology",
        subject1: "Event Driven",
        grade1: 98,
        unit1: 3,
        subject2: "Pathfit",
        grade2: 77,
        unit2: 2,
        subject3: "App Dev",
        grade3: 87,
        unit3: 3,
        subject4: "Arts",
        grade4: 86,
        unit4: 3,
        subject5: "Networking 1",
        grade5: 95,
        unit5: 3,
        subject6: "Integrative Programming Technologies",
        grade6: 81,
        unit6: 3

    },
    student3: {
        studentName: "Kevin Vinluan",
        idNumber: "2026-6719",
        yearLevel: 2,
        program: "Information Technology",
        subject1: "Event Driven",
        grade1: 78,
        unit1: 3,
        subject2: "Pathfit",
        grade2: 89,
        unit2: 2,
        subject3: "App Dev",
        grade3: 98,
        unit3: 3,
        subject4: "Arts",
        grade4: 86,
        unit4: 3,
        subject5: "Networking 1",
        grade5: 95,
        unit5: 3,
        subject6: "Integrative Programming Technologies",
        grade6: 83,
        unit6: 3
    }
};

//this is for student 1
let totalGrade1 =
    (bsit_students.student1.grade1 * bsit_students.student1.unit1) +
    (bsit_students.student1.grade2 * bsit_students.student1.unit2) +
    (bsit_students.student1.grade3 * bsit_students.student1.unit3) +
    (bsit_students.student1.grade4 * bsit_students.student1.unit4) +
    (bsit_students.student1.grade5 * bsit_students.student1.unit5) +
    (bsit_students.student1.grade6 * bsit_students.student1.unit6);

let totalUnit1 =
    bsit_students.student1.unit1 +
    bsit_students.student1.unit2 +
    bsit_students.student1.unit3 +
    bsit_students.student1.unit4 +
    bsit_students.student1.unit5 +
    bsit_students.student1.unit6;

let gwa1 = totalGrade1 / totalUnit1;
let letterGrade1 = "";

if (gwa1 >= 98 && gwa1 <= 100) {
    letterGrade1 = "A+";
} else if (gwa1 >= 94 && gwa1 < 98) {
    letterGrade1 = "A-";
} else if (gwa1 >= 90 && gwa1 < 94) {
    letterGrade1 = "B+";
} else if (gwa1 >= 87 && gwa1 < 90) {
    letterGrade1 = "B";
} else if (gwa1 >= 83 && gwa1 < 87) {
    letterGrade1 = "B-";
} else if (gwa1 >= 80 && gwa1 < 83) {
    letterGrade1 = "C";
} else if (gwa1 >= 77 && gwa1 < 80) {
    letterGrade1 = "C";
} else if (gwa1 >= 73 && gwa1 < 77) {
    letterGrade1 = "D";
} else {
    letterGrade1 = "F";
}

console.log("Student Profile:", bsit_students.student1.studentName);
console.log("ID Number:", bsit_students.student1.idNumber);
console.log("Year Level:", bsit_students.student1.yearLevel);
console.log("Program:", bsit_students.student1.program);
console.log("======Courses Enrolled:=====");
console.log(bsit_students.student1.subject1 + " - Grade: " + bsit_students.student1.grade1 + ", Units: " + bsit_students.student1.unit1);
console.log(bsit_students.student1.subject2 + " - Grade: " + bsit_students.student1.grade2 + ", Units: " + bsit_students.student1.unit2);
console.log(bsit_students.student1.subject3 + " - Grade: " + bsit_students.student1.grade3 + ", Units: " + bsit_students.student1.unit3);
console.log(bsit_students.student1.subject4 + " - Grade: " + bsit_students.student1.grade4 + ", Units: " + bsit_students.student1.unit4);
console.log(bsit_students.student1.subject5 + " - Grade: " + bsit_students.student1.grade5 + ", Units: " + bsit_students.student1.unit5);
console.log(bsit_students.student1.subject6 + " - Grade: " + bsit_students.student1.grade6 + ", Units: " + bsit_students.student1.unit6);
console.log("Calculated GWA:", gwa1);
console.log("Letter Grade Scale:", letterGrade1);
console.log("=============================");


//this is for student 2
let totalGrade2 =
    (bsit_students.student2.grade1 * bsit_students.student2.unit1) +
    (bsit_students.student2.grade2 * bsit_students.student2.unit2) +
    (bsit_students.student2.grade3 * bsit_students.student2.unit3) +
    (bsit_students.student2.grade4 * bsit_students.student2.unit4) +
    (bsit_students.student2.grade5 * bsit_students.student2.unit5) +
    (bsit_students.student2.grade6 * bsit_students.student2.unit6);

let totalUnit2 =
    bsit_students.student2.unit1 +
    bsit_students.student2.unit2 +
    bsit_students.student2.unit3 +
    bsit_students.student2.unit4 +
    bsit_students.student2.unit5 +
    bsit_students.student2.unit6;
let gwa2 = totalGrade2/ totalUnit2
let letterGrade2 = "";

if (gwa2 >= 98 && gwa2 <= 100) {
    letterGrade2 = "A+";
} else if (gwa2 >= 94 && gwa2 < 98) {
    letterGrade2 = "A-";
} else if (gwa2 >= 90 && gwa2 < 94) {
    letterGrade2 = "B+";
} else if (gwa2 >= 87 && gwa2 < 90) {
    letterGrade2 = "B";
} else if (gwa2 >= 83 && gwa2 < 87) {
    letterGrade2 = "B-";
} else if (gwa2 >= 80 && gwa2 < 83) {
    letterGrade2 = "C";
} else if (gwa2 >= 77 && gwa2 < 80) {
    letterGrade2 = "C";
} else if (gwa2 >= 73 && gwa2 < 77) {
    letterGrade2 = "D";
} else {
    letterGrade2 = "F";
}

console.log("Student Profile:", bsit_students.student2.studentName);
console.log("ID Number:", bsit_students.student2.idNumber);
console.log("Year Level:", bsit_students.student2.yearLevel);
console.log("Program:", bsit_students.student1.program);
console.log("======Courses Enrolled:=====");
console.log(bsit_students.student2.subject1 + " - Grade: " + bsit_students.student2.grade1 + ", Units: " + bsit_students.student2.unit1);
console.log(bsit_students.student2.subject2 + " - Grade: " + bsit_students.student2.grade2 + ", Units: " + bsit_students.student2.unit2);
console.log(bsit_students.student2.subject3 + " - Grade: " + bsit_students.student2.grade3 + ", Units: " + bsit_students.student2.unit3);
console.log(bsit_students.student2.subject4 + " - Grade: " + bsit_students.student2.grade4 + ", Units: " + bsit_students.student2.unit4);
console.log(bsit_students.student2.subject5 + " - Grade: " + bsit_students.student2.grade5 + ", Units: " + bsit_students.student2.unit5);
console.log(bsit_students.student2.subject6 + " - Grade: " + bsit_students.student2.grade6 + ", Units: " + bsit_students.student2.unit6);
console.log("Calculated GWA:", gwa2);
console.log("Letter Grade Scale:", letterGrade2);
console.log("=============================");

//this is for student 3
let totalGrade3 =
    (bsit_students.student3.grade1 * bsit_students.student3.unit1) +
    (bsit_students.student3.grade2 * bsit_students.student3.unit2) +
    (bsit_students.student3.grade3 * bsit_students.student3.unit3) +
    (bsit_students.student3.grade4 * bsit_students.student3.unit4) +
    (bsit_students.student3.grade5 * bsit_students.student3.unit5) +
    (bsit_students.student3.grade6 * bsit_students.student3.unit6);

let totalUnit3 =
    bsit_students.student3.unit1 +
    bsit_students.student3.unit2 +
    bsit_students.student3.unit3 +
    bsit_students.student3.unit4 +
    bsit_students.student3.unit5 +
    bsit_students.student3.unit6;
let gwa3 = totalGrade3/ totalUnit3
let letterGrade3 = "";

if (gwa3 >= 98 && gwa3 <= 100) {
    letterGrade3 = "A+";
} else if (gwa3 >= 94 && gwa3 < 98) {
    letterGrade3 = "A-";
} else if (gwa3 >= 90 && gwa3 < 94) {
    letterGrade3 = "B+";
} else if (gwa3 >= 87 && gwa3 < 90) {
    letterGrade3 = "B";
} else if (gwa3 >= 83 && gwa3 < 87) {
    letterGrade3 = "B-";
} else if (gwa3 >= 80 && gwa3 < 83) {
    letterGrade3 = "C";
} else if (gwa3 >= 77 && gwa3 < 80) {
    letterGrade3 = "C";
} else if (gwa3 >= 73 && gwa3 < 77) {
    letterGrade3 = "D";
} else {
    letterGrade3 = "F";
}

console.log("Student Profile:", bsit_students.student3.studentName);
console.log("ID Number:", bsit_students.student3.idNumber);
console.log("Year Level:", bsit_students.student3.yearLevel);
console.log("Program:", bsit_students.student3.program);
console.log("======Courses Enrolled:=====");
console.log(bsit_students.student3.subject1 + " - Grade: " + bsit_students.student3.grade1 + ", Units: " + bsit_students.student3.unit1);
console.log(bsit_students.student3.subject2 + " - Grade: " + bsit_students.student3.grade2 + ", Units: " + bsit_students.student3.unit2);
console.log(bsit_students.student3.subject3 + " - Grade: " + bsit_students.student3.grade3 + ", Units: " + bsit_students.student3.unit3);
console.log(bsit_students.student3.subject4 + " - Grade: " + bsit_students.student3.grade4 + ", Units: " + bsit_students.student3.unit4);
console.log(bsit_students.student3.subject5 + " - Grade: " + bsit_students.student3.grade5 + ", Units: " + bsit_students.student3.unit5);
console.log(bsit_students.student3.subject6 + " - Grade: " + bsit_students.student3.grade6 + ", Units: " + bsit_students.student3.unit6);
console.log("Calculated GWA:", gwa3);
console.log("Letter Grade Scale:", letterGrade3);
console.log("=============================");

