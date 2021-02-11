import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

export default class Navbar extends React.Component {

    // static contextType = ThemeContext;

    render = () => <AuthContext.Consumer>
        {authContext => <ThemeContext.Consumer>
            {themeContext => {
                const { isAuthenticated, toggleAuth } = authContext;
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;

                return <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h2>Hooks & Context</h2>
                    <p onClick={toggleAuth}>{isAuthenticated ? 'Signed in' : 'Signed out'}</p>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            }}
        </ThemeContext.Consumer>}
    </AuthContext.Consumer>;
}