// libraryApp.js

import { bookRecord, formatBookStatus } from "./bookModule.js";


console.log("Title:", bookRecord.title);
console.log("Author:", bookRecord.author);
console.log("Year:", bookRecord.year);

console.log("Label:", bookRecord.getBookLabel());


console.log(formatBookStatus(bookRecord, "Available"));