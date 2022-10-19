import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';
const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, handleLogin, handleLogout, handleSignUp
  } = useAuth();
  return (
    <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout, handleSignUp }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
