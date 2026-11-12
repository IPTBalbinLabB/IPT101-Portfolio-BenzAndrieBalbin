const StudentProfile = { 
    studentName: "Balbin, Benz Andrie",
    idNumber: "2026-6719",
    yearLevel: 2,
    Program: "Information Technology"
};

const coursesEnrolled = {
    subject1: "Event Driven",
    subject2: "Pathfit",
    subject3: "App Dev",
    subject4: "Arts",
    subject5: "Networking 1",
    subject6: "Integrative Programming Technologies"
};

let grade1 = 80;
let unit1 = 3;

let grade2 = 89;
let unit2 = 2;

let grade3 = 90;
let unit3 = 3;

let grade4 = 85;
let unit4 = 3;

let grade5 = 92;
let unit5 = 3;

let grade6 = 88;
let unit6 = 3;


let total_grade = (grade1 * unit1) + (grade2 * unit2) + (grade3 * unit3) + 
                  (grade4 * unit4) + (grade5 * unit5) + (grade6 * unit6);
                  
let totalunit = unit1 + unit2 + unit3 + unit4 + unit5 + unit6;

let gwa = total_grade / totalunit;

let letter_grade_scale = "";

if (gwa >= 98) {
    letter_grade_scale = "A+";
} else if (gwa >= 94) {
    letter_grade_scale = "A-";
} else if (gwa >= 90) {
    letter_grade_scale = "B+";
} else if (gwa >= 87) {
    letter_grade_scale = "B";
} else if (gwa >= 83) {
    letter_grade_scale = "B-";
} else if (gwa >= 80) {
    letter_grade_scale = "C";
} else if (gwa >= 77) {
    letter_grade_scale = "C";
} else if (gwa >= 73) {
    letter_grade_scale = "D";
} else {
    letter_grade_scale = "F";
}

console.log("Student Profile:", StudentProfile.studentName);
console.log("ID number:", StudentProfile.idNumber);
console.log("Year Level:", StudentProfile.yearLevel);
console.log("Program:", StudentProfile.Program);

console.log("======Courses Enrolled:=====");
console.log( coursesEnrolled.subject1 + " - Grade: " + grade1 + ", Units: " + unit1);
console.log( coursesEnrolled.subject2 + " - Grade: " + grade2 + ", Units: " + unit2);
console.log( coursesEnrolled.subject3 + " - Grade: " + grade3 + ", Units: " + unit3);
console.log( coursesEnrolled.subject4 + " - Grade: " + grade4 + ", Units: " + unit4);
console.log( coursesEnrolled.subject5 + " - Grade: " + grade5 + ", Units: " + unit5);
console.log( coursesEnrolled.subject6 + " - Grade: " + grade6 + ", Units: " + unit6);
console.log("Calculated GWA:", gwa);
console.log("Letter Grade Scale:", letter_grade_scale);