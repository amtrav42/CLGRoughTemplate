import React, { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";
import styles from "./Button.module.css";
import "../../App.css";

const BasicButton = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;

  return (
    <button
      className={`${styles.button} ${
        darkMode ? "button-dark" : "button-light"
      } ${props.className}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default BasicButton;
