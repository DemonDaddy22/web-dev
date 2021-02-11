import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggler from './components/ThemeToggler';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';

const App = () => <div className='App'>
    <ThemeContextProvider>
        <AuthContextProvider>
            <Navbar />
            <BookList />
            <ThemeToggler />
        </AuthContextProvider>
    </ThemeContextProvider>
</div>;

export default App;
