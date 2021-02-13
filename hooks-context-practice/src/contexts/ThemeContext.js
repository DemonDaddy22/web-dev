import React, { createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends React.Component {

    state = {
        isLightTheme: true,
        light: {
            syntax: '#a8fe52', ui: '#129882', bg: '#1eb89737', body: '#cef8e7'
        },
        dark: {
            syntax: '#115647', ui: '#68ba92', bg: '#1eb89737', body: '#072720'
        }
    }

    toggleTheme = () => this.setState({ isLightTheme: !this.state.isLightTheme });

    render = () => <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
    </ThemeContext.Provider>
}