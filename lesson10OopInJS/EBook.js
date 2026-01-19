import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(fileFormat) {
        if (typeof fileFormat !== 'string') {
            throw new Error('File format should be a string');
        }
        if (fileFormat.trim() === '') {
            throw new Error('File format cannot be empty');
        }
        this._fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`EBook title is ${this.title}, author is ${this.author}, year is ${this.year}. Format is ${this.fileFormat}`);
    }

    static convertToEBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }

}
