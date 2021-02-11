import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class Navbar extends React.Component {

    static contextType = ThemeContext;

    render = () => {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h2>Hooks & Context</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>;
    }
}