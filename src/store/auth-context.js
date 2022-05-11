import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  name: "",
  onLogin: () => {},
  onLogout: () => {}
});

export default AuthContext;
