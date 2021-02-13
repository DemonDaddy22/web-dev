import { useContext } from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggler from './components/ThemeToggler';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import { ThemeContext } from './contexts/ThemeContext';

const App = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return <div className='app-wrapper' style={{ background: theme.body }}>
        <div className='app'>
            <AuthContextProvider>
                <Navbar />
                <BookContextProvider>
                    <BookList />
                </BookContextProvider>
                <ThemeToggler />
            </AuthContextProvider>
        </div>
    </div>;
}

export default App;
