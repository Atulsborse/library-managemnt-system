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
