// All of your book objects are going to be stored in an array,
// so you’ll need a constructor for books. Then, add a separate
// function to the script (not inside the constructor) that can
// take some arguments, create a book from those arguments, and
// store the new book object into an array. Also, all of your
// book objects should have a unique id, which can be generated
// using crypto.randomUUID(). This ensures each book has a unique
// and stable identifier, preventing issues when books are removed
// or rearranged.

const myLibrary = [];

function Book(title, author, numPages, hasRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.hasRead = hasRead;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, numPages, hasRead) {
  const book = new Book(title, author, numPages, hasRead);
  myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, true);
