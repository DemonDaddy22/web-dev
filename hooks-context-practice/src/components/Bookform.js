import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Bookform = () => {

    const { addBook } = useContext(BookContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = () => {
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return <div className='form'>
        <input style={{ color: theme.ui, borderColor: theme.ui }} type='text' value={title} placeholder='Enter Book Title' className='input-title' onChange={e => setTitle(e.target.value)}></input>
        <input style={{ color: theme.ui, borderColor: theme.ui }} type='text' value={author} placeholder='Enter Book Author' className='input-author' onChange={e => setAuthor(e.target.value)}></input>
        <button style={{ color: theme.syntax, backgroundColor: theme.ui }} onClick={handleSubmit}>Submit</button>
    </div>;
}

export default Bookform;