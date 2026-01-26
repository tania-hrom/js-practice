export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year
    };

    get title() {
        return this._title;
    }

    set title(title) {
        if (typeof title !== 'string') {
            throw new Error('Title should be a string');
        }
        if (title.trim() === '') {
            throw new Error('Title cannot be empty');
        }
        this._title = title;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        if (typeof author !== 'string') {
            throw new Error('Author should be a string');
        }
        if (author.trim() === '') {
            throw new Error('Author cannot be empty');
        }
        this._author = author;
    }

    get year() {
        return this._year;
    }

    set year(year) {
        if (typeof year !== 'number') {
            throw new Error('Year should be a number');
        }
        if (year <= 0) {
            throw new Error('Year should be a positive number');
        }
        this._year = year;
    }

    printInfo() {
        console.log(`Book title is ${this.title}, author is ${this.author}, year is ${this.year}`);
    }

    static oldestBook(books) {
        let oldestBook = books[0];

        for (const book of books) {
            if (book.year < oldestBook.year) {
                oldestBook = book;
            }
        }
        return `The oldest book here is ${oldestBook.title} by ${oldestBook.author}. It was published in ${oldestBook.year}.`
    }
}
