import React, { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeContext } from "./store/theme-context";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import BookPage from "../src/components/Pages/Books/BookPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password, name) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    setName(name);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loggedRoutes = (
    <>
      <Route path="/books" component={BookPage} />
      <Route path="/" exact component={Home} />
    </>
  );

  const notLoggedInRoutes = (
    <>
      <Route path="/" exact component={Login} />
    </>
  );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        name: name,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        <Switch>
          {isLoggedIn && loggedRoutes}
          {!isLoggedIn && notLoggedInRoutes}
        </Switch>
      </main>
    </AuthContext.Provider>
  );
}

export default App;
