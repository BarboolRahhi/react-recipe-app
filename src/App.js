import { ThemeProvider } from 'styled-components';
import './App.css';
import Home from './Home/Home';
import Header from './shared/Header';
import { GlobalStyles } from './config/globalStyles';
import { darkTheme, lightTheme } from './config/Theme';
import { useDarkMode } from './config/useDarkMode';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeDetail from './Recipes/RecipeDetail';
import Footer from './shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ToastContainer />
        <div className='container'>
          <Header theme={theme} onToggle={themeToggler} />
          <div className='App'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/recipe/:id'>
                <RecipeDetail />
              </Route>
              <Route path='*'>
                <p>Not Found</p>
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
