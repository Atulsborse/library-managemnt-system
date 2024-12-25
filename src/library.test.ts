import { expect } from 'chai';
import { Library } from './library';
import { Book } from './book';

describe('Library', () => {
  it('should add a new book', () => {
    const library = new Library();
    const book = new Book('123', 'Test Book', 'Author', 2021);
    library.addBook(book);
    expect(library.getBooks()).to.include(book);
  });
});
it('should borrow a book', () => {
    const library = new Library();
    const book = new Book('123', 'Test Book', 'Author', 2021);
    library.addBook(book);
    library.borrowBook('123');
    expect(book.isAvailable).to.be.false;
  });
  
  it('should throw an error if the book is not available', () => {
    const library = new Library();
    const book = new Book('123', 'Test Book', 'Author', 2021, false);
    library.addBook(book);
    expect(() => library.borrowBook('123')).to.throw('Book not available');
  });
  it('should return a book', () => {
    const library = new Library();
    const book = new Book('123', 'Test Book', 'Author', 2021, false);
    library.addBook(book);
    library.returnBook('123');
    expect(book.isAvailable).to.be.true;
  });
  it('should view available books', () => {
    const library = new Library();
    const book1 = new Book('123', 'Test Book 1', 'Author 1', 2021, true);
    const book2 = new Book('456', 'Test Book 2', 'Author 2', 2020, false);
    library.addBook(book1);
    library.addBook(book2);
    const availableBooks = library.getAvailableBooks();
    expect(availableBooks).to.include(book1);
    expect(availableBooks).to.not.include(book2);
  });
  