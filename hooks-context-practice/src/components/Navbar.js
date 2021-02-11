import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class Navbar extends React.Component {

    // static contextType = ThemeContext;

    render = () => <ThemeContext.Consumer>
        {context => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            
            return <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h2>Hooks & Context</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        }}
    </ThemeContext.Consumer>;
}