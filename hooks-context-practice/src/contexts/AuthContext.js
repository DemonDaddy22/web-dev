import React, { createContext } from 'react';

export const AuthContext = createContext();

export default class AuthContextProvider extends React.Component {

    state = {
        isAuthenticated: false
    }

    toggleAuth = () => this.setState({ isAuthenticated: !this.state.isAuthenticated });

    render = () => <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
        {this.props.children}
    </AuthContext.Provider>
}