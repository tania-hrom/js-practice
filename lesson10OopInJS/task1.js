import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book('Normal People', 'Sally Rooney', 2017);
const book2 = new Book('The Lord of the Rings ', 'J. R. R. Tolkien', 1954);
const book3 = new Book('Harry Potter and the Philosophers Stone', 'J.K. Rowling', 1997);

console.log('This is my library:');
book1.printInfo();
book2.printInfo();
book3.printInfo();
const books = [book1, book2, book3];
console.log(Book.oldestBook(books));

console.log('This is my e-library:');
const eBook1 = new EBook('A Study in Scarlet', 'Arthur Conan Doyle', 1887, 'pdf');
const eBook2 = new EBook('A Game of Thrones', 'George R. R. Martin', 1996, 'txt');
eBook1.printInfo();
eBook2.printInfo();
console.log('Added new eBook to my e-library:');
console.log(EBook.convertToEBook(book3, '.doc'));
