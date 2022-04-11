import React, { useContext } from "react";

import Card from "../Card/Card";
import Button from "../Button/BasicButton";
import classes from "./Home.module.css";

import { ThemeContext } from "../../store/theme-context";
import AuthContext from "../../store/auth-context";

const Home = (props) => {
  const theme = useContext(ThemeContext);
  const { name, onLogout } = useContext(AuthContext);
  
  return (
    <Card
      className={`${classes.home} ${theme.darkMode ? "bg-dark" : "bg-light"}`}
    >
      <h1 className={`${theme.darkMode ? "para-dark" : "para-light"}`}>
        Welcome back {name}!
      </h1>
      <Button onClick={onLogout} title={"Logout"} />
    </Card>
  );
};

export default Home;
