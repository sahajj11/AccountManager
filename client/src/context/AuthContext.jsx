/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from 'react';
import { useAuth } from '../hooks/useAuth.js';


// 1. Create the Context object
const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
  // 2. Call the custom hook to get the state and handlers
  const auth = useAuth()

  // 3. Provide the auth object to the rest of the application
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    // This is a great error message for debugging purposes
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  
  return context;
};

// Default export is often the Provider itself
export default AuthProvider;