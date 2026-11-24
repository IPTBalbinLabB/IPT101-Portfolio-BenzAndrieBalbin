//mainApp.js

import {studentDetails, printSummary} from './studentModule.js';

const enrollmentMessage = printSummary(studentDetails, "officially Enrolled");
console.log(enrollmentMessage);