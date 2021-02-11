import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggler from './components/ThemeToggler';
import ThemeContextProvider from './contexts/ThemeContext';

const App = () => <div className='App'>
    <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggler />
    </ThemeContextProvider>
</div>;

export default App;
