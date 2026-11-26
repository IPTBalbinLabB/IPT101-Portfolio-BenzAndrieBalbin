// bookModule.js

export const bookRecord = {
  title: "Noli Me Tangere",
  author: "Jose Rizal",
  year: 1887,

  getBookLabel() {
    return `${this.title} by ${this.author} (${this.year})`;
  }
};

export function formatBookStatus(book, status) {
  return `Book: ${book.getBookLabel()} | Status: ${status}`;
}