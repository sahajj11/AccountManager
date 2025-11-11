/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from 'react';
import { useAuth } from '../hooks/useAuth.js';

// Create the Context object
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  //  Call the custom hook to get the state and handlers
  const auth = useAuth()

  //  Provide the auth object to the rest of the application
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  
  return context;
};

export default AuthProvider;