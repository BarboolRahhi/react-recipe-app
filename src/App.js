import { ThemeProvider } from "styled-components";
import "./App.css";
import Home from "./Home/Home";
import Header from "./shared/components/Header";
import { GlobalStyles } from "./config/globalStyles";
import { darkTheme, lightTheme } from "./config/Theme";
import { useDarkMode } from "./config/useDarkMode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetail from "./Recipes/RecipeDetail";
import Footer from "./shared/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ToastContainer position="bottom-right" />
        <div className="container">
          <Header theme={theme} onToggle={themeToggler} />
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="*" element={() => <p>Not Found</p>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
