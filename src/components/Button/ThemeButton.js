import React, { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";
import BasicButton from "./BasicButton";
import "../../App.css";

const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;

  const onClick = () => {
    theme.setDarkMode(!darkMode);
  };

  return (
    <BasicButton
      onClick={onClick}
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    />
  );
};

export default ThemeButton;
