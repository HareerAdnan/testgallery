import React, { createContext, useEffect, useState } from 'react';

// Create a new context
export const AuthContext = createContext();

// Create a provider component for the context
export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState('');



  console.log('Token', token)

  useEffect(() => {
    const storedToken = getToken();
    setToken(storedToken || '');
  }, []);

  const storeToken = (value) => {
    localStorage.setItem('token', value);
    setToken(value);
  };

  const getToken = () => {
    let token = localStorage.getItem('token');
    return token;
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  const contextValue = {
    token,
    storeToken,
    getToken,
    removeToken
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
