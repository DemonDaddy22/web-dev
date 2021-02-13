import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggler = () => {
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return <button style={{ background: theme.ui, color: theme.syntax, borderColor: theme.syntax }} className='theme-toggler' onClick={toggleTheme}>
        Toggle Theme
</button>;
}

export default ThemeToggler;