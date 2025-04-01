function getTheTitles(books) {
    let titles = [];
    books.forEach(book => {
        titles.push(book.title);
    });
    console.log(titles);
}

const books = [
    { title: 'El Principito', author: 'Antoine de Saint-Exupéry' },
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
    { title: '1984', author: 'George Orwell' }
];

// Llamamos a la función
getTheTitles(books);