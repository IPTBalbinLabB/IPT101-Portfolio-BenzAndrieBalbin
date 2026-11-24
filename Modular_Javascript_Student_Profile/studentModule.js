//studentModule.js 

export const studentDetails = {
    name: "Benz Andrie P. Balbin",
    id: 6719,
    program: "BSIT",
    yearLevel: "Second year",
    schoolYear: "2026-2027",

};

export function printSummary(student, status) {
  return `Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}`;
}