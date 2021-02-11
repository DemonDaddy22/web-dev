import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class ThemeToggler extends React.Component {

    render = () => <ThemeContext.Consumer>
        {context => <button className='theme-toggler' onClick={context.toggleTheme}>
            Toggle Theme
        </button>}
    </ThemeContext.Consumer>;
}