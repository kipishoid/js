class Library {
    #books;
  
    constructor(initialBooks = []) {
      if (new Set(initialBooks).size !== initialBooks.length) {
        throw new Error('Initial book list contains duplicates');
      }
      this.#books = [...initialBooks];
    }
  
    get allBooks() {
      return this.#books;
    }
  
    addBook(title) {
      if (this.#books.includes(title)) {
        throw new Error(`The book "${title}" already exists in the library`);
      }
      this.#books.push(title);
    }
  
    removeBook(title) {
      const index = this.#books.indexOf(title);
      if (index === -1) {
        throw new Error(`The book "${title}" does not exist in the library`);
      }
      this.#books.splice(index, 1);
    }
  
    hasBook(title) {
      return this.#books.includes(title);
    }
  }
  
  const myLibrary = new Library(['The Great Gatsby', '1984', 'To Kill a Mockingbird']);
  console.log(myLibrary.allBooks);
  myLibrary.addBook('Brave New World');
  console.log(myLibrary.allBooks);
  myLibrary.removeBook('1984');
  console.log(myLibrary.allBooks);
  console.log(myLibrary.hasBook('To Kill a Mockingbird'));
  console.log(myLibrary.hasBook('1984'));