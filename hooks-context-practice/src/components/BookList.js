import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Bookform from './Bookform';

const BookList = () => {
    const { books, addBook, removeBook } = useContext(BookContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
        <Bookform />
        {books.length ? <ul>
            {books.map((book, index) => <li key={index} style={{ background: theme.ui }} onClick={() => removeBook(book.id)}>
                <div className='title'>{book.title}</div>
                <div className='author'>{book.author}</div>
            </li>)}
        </ul> :
        <div style={{ color: theme.ui }}>Time to add some books to your list :)</div>}
    </div>;
}

export default BookList;

// export default class BookList extends React.Component {

//     // static contextType = ThemeContext;

//     render = () => <ThemeContext.Consumer>
//         {context => {
//             const { isLightTheme, light, dark } = context;
//             const theme = isLightTheme ? light : dark;

//             return <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>The Way of Kings</li>
//                     <li style={{ background: theme.ui }}>The Name of the Wind</li>
//                     <li style={{ background: theme.ui }}>The Final Empire</li>
//                 </ul>
//             </div>;
//         }}
//     </ThemeContext.Consumer>;
// }