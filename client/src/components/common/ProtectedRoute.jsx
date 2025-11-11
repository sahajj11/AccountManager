import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext'; 

// Component to guard routes that require authentication.
const ProtectedRoute = ({ children }) => {
  //  Get the current authentication state
  const { isLoggedIn, isLoading } = useAuthContext();
  
  if (isLoading) {
    return <div>Loading user session...</div>; 
  }

  //  The core protection logic
  if (!isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  //  User IS logged in. Render the requested child component.
  return children;
};

export default ProtectedRoute;