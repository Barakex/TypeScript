enum Category { JavaScript, CSS, HTML, Angular };
const books = getAllBooks();

function getAllBooks() {
    let books: Array<any> = [
        { id: 1, title: 'js', author: 'evan', available: false, category: Category.JavaScript },
        { id: 2, title: 'Css', author: 'evan1', available: true, category: Category.CSS },
        { id: 3, title: 'js2', author: 'evan2', available: true, category: Category.JavaScript },
        { id: 4, title: 'Html', author: 'evan3', available: false, category: Category.HTML },
    ];
    return books
}


function logFirstAvailable(books = getAllBooks()): void {
    console.log(`кол-во книг: ${books.length}`);
    for (let book of books) {
        if (book.available) {
            console.log(book.title);
            break;
        }
    }
}

function getBooksByID(id: number) {
    const allBooks = getAllBooks();
    return allBooks.find((book: any) => book.id === id);
}

function getBooksByCategory(category: Category = Category.JavaScript): Array<string> {
    const allBooks = getAllBooks();
    const filteredTittles: string[] = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === category) {
            filteredTittles.push(currentBook.title);
        }
    }

    return filteredTittles;
}

function logBooksTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

logFirstAvailable(books);

const jsBooks = getBooksByCategory(Category.JavaScript);
logBooksTitles(jsBooks);

console.log(getBooksByID(4));

//------------------------------------------------------------

function createCustomerID(name: string, id: number): string {
    return `${name} ${id}`;
}

const myID: string = createCustomerID('Ann', 10);
console.log(myID);

let IdGenerator: (name: string, id: number) => string;
IdGenerator = createCustomerID;
let myID2 = IdGenerator('Alex', 20);
console.log(myID2);

//------------------------------------------------------------

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(name);
    if (age) {
        console.log(age);
    }
    if (city) {
        console.log(city);
    }
    console.log('------------------');
}

createCustomer('Alex', 25, 'Moscow');
createCustomer('Alex', 25);
createCustomer('Alex');

console.log(getBooksByCategory());

//------------------------------------------------------------

function checkoutBooks(cunstomer: string, ...bookIDs: number[]): string[] {
    console.log(cunstomer);
    const booCkeckOut: string[] = [];
    for (let id of bookIDs) {
        const book = getBooksByID(id);
        if (book && book.available) {
            booCkeckOut.push(book.title);
        }
    }

    return booCkeckOut;
}

const myBooks: string[] = checkoutBooks('Alex', 1, 2, 3);
myBooks.forEach(items => {
    console.log(items);
});

//------------------------------------------------------------

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(param: any): string[] {
    const books = getAllBooks();
    const result: string[] = [];
    if (typeof (param) === 'string') {
        console.log(param);
        for (let book of books) {
            if (book.author === param) {
                result.push(book.title);
            }
        }
    }
    else if (typeof (param) === 'boolean') {
        for (let book of books) {
            if (book.available === param) {
                result.push(book.title);
            }
        }
    }
    return result;
}

let checkedOutBooks: string[] = getTitles(false);
checkedOutBooks.forEach(item => console.log(item));
