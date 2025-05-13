// Write a constructor for making “Book” objects. We will revisit this in the next project.
// Your book objects should have the book’s title, author, the number of pages,
// and whether or not you have read the book.

function Book(title, author, numPages, hasRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.hasRead = hasRead;
    this.info = function() {
        return `${title} by ${author}, ${numPages} pages, ${hasRead ? "already read" : "not yet read"}`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info())