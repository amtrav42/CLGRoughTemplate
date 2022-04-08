import React from "react";

import Navigation from "./Navigation";
import ThemeButton from "../Button/ThemeButton";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Hello World</h1>
      <div className={classes.NavButtons}>
        <ThemeButton />
        <Navigation onLogout={props.onLogout} />
      </div>
    </header>
  );
};

export default MainHeader;
