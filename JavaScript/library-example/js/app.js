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

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("button.cancel");
const addBookForm = document.getElementById("add-book-form")

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  addBookForm.reset();
  dialog.close();
});

function addBookToTable(tbodyElement, id, title, author, numPages, hasRead) {
  const trElement = document.createElement("tr");
  trElement.id = id;

  [title, author, numPages, hasRead].forEach(value => {
    tdElement = document.createElement("td");
    tdElement.textContent = value;
    trElement.appendChild(tdElement);
  });
  tbodyElement.appendChild(trElement);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, true);


const tbodyElement = document.getElementById("book-list");

myLibrary.forEach(book => {
  addBookToTable(tbodyElement, book.id, book.title, book.author, book.numPages, book.hasRead);
});

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(addBookForm);

  for (const pair of formData.entries()) {
    if (typeof window !== 'undefined') {
      window[pair[0]] = pair[1];
    }
    // For Node.js environments
    // else if (typeof global !== 'undefined') {
    //   global[pair[0]] = pair[1];
    // }
  }

  console.log(title, author, parseInt(numPages), hasRead ? true : false);
  addBookToLibrary(title, author, parseInt(numPages), hasRead ? true : false);
  const tbodyElement = document.getElementById("book-list");
  addBookToTable(tbodyElement, myLibrary.at(-1).id, title, author, numPages, hasRead);
  addBookForm.reset();
  dialog.close();
});
