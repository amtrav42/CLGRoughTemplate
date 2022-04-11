import React, { useContext } from "react";

import AuthContext from "../../store/auth-context";
import BasicButton from "../Button/BasicButton";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <>
            <li>
              <a href="/books">Books</a>
            </li>
            <li>
              <BasicButton onClick={props.onLogout} title="Logout" />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
