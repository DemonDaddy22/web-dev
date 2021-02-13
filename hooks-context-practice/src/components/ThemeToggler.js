import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggler = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return <button className='theme-toggler' onClick={toggleTheme}>
        Toggle Theme
</button>;
}

export default ThemeToggler;