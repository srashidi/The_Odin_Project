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

class Book {
  constructor(title, author, numPages, hasRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.hasRead = hasRead;
    this.id = crypto.randomUUID();
  }

  toggleHasRead() {
    this.hasRead = !this.hasRead;
  }
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

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(addBookForm);

  const title = formData.get("title");
  const author = formData.get("author");
  let numPages = formData.get("numPages");
  let hasRead = formData.get("hasRead");

  if (title && author && typeof numPages === 'string' && hasRead !== null) {
    numPages = parseInt(numPages);
    hasRead = hasRead === "yes";
    addBookToLibrary(title, author, numPages, hasRead);
    const tbodyElement = document.getElementById("book-list");
    addBookToTable(tbodyElement, myLibrary.at(-1).id, title, author, numPages, hasRead);
    addBookForm.reset();
    dialog.close();
  }
});

function addBookToLibrary(title, author, numPages, hasRead) {
  const book = new Book(title, author, numPages, hasRead);
  myLibrary.push(book);
}

function addBookToTable(tbodyElement, id, title, author, numPages, hasRead) {
  const trElement = document.createElement("tr");
  trElement.id = id;

  [title, author, numPages, hasRead].forEach(value => {
    let tdElement = document.createElement("td");
    tdElement.textContent = value;
    trElement.appendChild(tdElement);
  });

  const removeButton = document.createElement("td");
  removeButton.textContent = "🗑";
  removeButton.classList.add("remove-button");
  removeButton.setAttribute("title", "Remove book");
  removeButton.addEventListener("click", () => {
    removeBookFromTable(id);
    const bookIndex = myLibrary.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
      myLibrary.splice(bookIndex, 1);
    }
  });
  trElement.appendChild(removeButton);

  const toggleReadButton = document.createElement("td");
  toggleReadButton.textContent = hasRead ? "📖" : "📘";
  toggleReadButton.classList.add("toggle-read-button");
  toggleReadButton.setAttribute("title", hasRead ? "Mark as unread" : "Mark as read");
  toggleReadButton.addEventListener("click", () => {
    const book = myLibrary.find(book => book.id === id);
    if (book) {
      book.toggleHasRead();
      toggleReadButton.textContent = book.hasRead ? "📖" : "📘";
      toggleReadButton.setAttribute("title", book.hasRead ? "Mark as unread" : "Mark as read");
      trElement.children[3].textContent = book.hasRead;
    }
  });
  trElement.appendChild(toggleReadButton);

  tbodyElement.appendChild(trElement);
}

function removeBookFromTable(id) {
  const trElement = document.getElementById(id);
  if (trElement) {
    trElement.remove();
  }
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
