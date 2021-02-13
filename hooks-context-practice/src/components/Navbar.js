import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;

    return <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h2>Hooks & Context</h2>
        <p onClick={toggleAuth}>{isAuthenticated ? 'Signed in' : 'Signed out'}</p>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>;
}

export default Navbar;

// export default class Navbar extends React.Component {

//     // static contextType = ThemeContext;

//     render = () => <AuthContext.Consumer>
//         {authContext => <ThemeContext.Consumer>
//             {themeContext => {
//                 const { isAuthenticated, toggleAuth } = authContext;
//                 const { isLightTheme, light, dark } = themeContext;
//                 const theme = isLightTheme ? light : dark;

//                 return <nav style={{ background: theme.ui, color: theme.syntax }}>
//                     <h2>Hooks & Context</h2>
//                     <p onClick={toggleAuth}>{isAuthenticated ? 'Signed in' : 'Signed out'}</p>
//                     <ul>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Contact</li>
//                     </ul>
//                 </nav>
//             }}
//         </ThemeContext.Consumer>}
//     </AuthContext.Consumer>;
// }