import { Book } from './book';

export class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  borrowBook(isbn: string): void {
    const book = this.books.find(book => book.isbn === isbn);
    if (!book || !book.isAvailable) {
      throw new Error('Book not available');
    }
    book.isAvailable = false;
  }

  getBooks(): Book[] {
    return this.books;
  }
}
