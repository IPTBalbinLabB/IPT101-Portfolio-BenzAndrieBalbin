//profileBuilder.js

function createStudentProfile(name, id, program, yearLevel, schoolYear) {
    return {
        name: name,
        id: id,
        program: program,
        yearLevel: yearLevel,
        schoolYear: schoolYear
    
    };
}

const myProfile = createStudentProfile(
    "Benz Andrie P. Balbin",
    6719,
    "BSIT",
    "Second year",
    "2026-2027"
)
console.log(myProfile);