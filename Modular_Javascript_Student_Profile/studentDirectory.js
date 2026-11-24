//studentDirectory.js

const studentRecord = {
    name: "Benz Andrie P. Balbin",
    id: 6719,
    program: "BSIT",
    yearLevel: "Second year",
    schoolYear: "2026-2027",


   getEnrollmentDetails(semester, campus) {
    return `[${this.schoolYear} | ${semester}] Student ${this.name} (ID: ${this.id}) from ${this.program} (${this.yearLevel}) is registered at ${campus} campus.`;
  }
};
console.log(studentRecord.getEnrollmentDetails("1st semester", "Main Campus"));