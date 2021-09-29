import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.scss";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import { MainContext } from "./mainContext";
import LanguageManager from "./languageManager";

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");

const text = (idCode) => {
  return LanguageManager.getText(language, idCode)
}

  useEffect(() => {
    if (theme === "dark") {
      document.body.style = "background: #333; color: #fff;";
    } else {
      document.body.style = "background: #fff; color: black;";
    }
  }, [theme]);

  return (
    <div className="App">
      <MainContext.Provider
        value={{ theme, setTheme, language, setLanguage, text }}
      >
        <Router>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="selected" to="/" exact={true}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/Settings">
                  Settings
                </NavLink>{" "}
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Router>
      </MainContext.Provider>
    </div>
  );
}

export default App;
