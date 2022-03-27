import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "../App.css";

const SwitchButton = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;

  const onClick = () => {
    theme.setDarkMode(!darkMode);
  };

  return (
    <button
      className={`button ${darkMode ? "button-dark" : "button-light"}`}
      onClick={onClick}
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default SwitchButton;
