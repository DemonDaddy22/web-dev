import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = props => {
    const [books, setBooks] = useState([
        { id: 1, title: 'Name of the Wind', author: 'Patrick Rothfuss' },
        { id: 2, title: 'The way of Kings', author: 'Brandon Sanderson' }
    ]);

    const addBook = (title, author) => setBooks([...books, { title, author, id: books.reduce((acc, book) => acc > book.id ? acc : book.id, 0) }]);

    const removeBook = id => setBooks(books.filter(book => book.id !== id));

    return <BookContext.Provider value={{ books, addBook, removeBook }}>
        {props.children}
    </BookContext.Provider>
}

export default BookContextProvider;