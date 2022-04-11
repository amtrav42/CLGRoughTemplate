import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  name: "",
});

export default AuthContext;