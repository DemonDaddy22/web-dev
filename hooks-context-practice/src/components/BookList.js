import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
        <ul>
            <li style={{ background: theme.ui }}>The Way of Kings</li>
            <li style={{ background: theme.ui }}>The Name of the Wind</li>
            <li style={{ background: theme.ui }}>The Final Empire</li>
        </ul>
    </div>;
}

export default BookList;

// export default class BookList extends React.Component {

//     // static contextType = ThemeContext;

//     render = () => <ThemeContext.Consumer>
//         {context => {
//             const { isLightTheme, light, dark } = context;
//             const theme = isLightTheme ? light : dark;

//             return <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>The Way of Kings</li>
//                     <li style={{ background: theme.ui }}>The Name of the Wind</li>
//                     <li style={{ background: theme.ui }}>The Final Empire</li>
//                 </ul>
//             </div>;
//         }}
//     </ThemeContext.Consumer>;
// }