import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext'; 

/**
 * Component to guard routes that require authentication.
 * If the user is logged in, it renders the child component (e.g., AccountPage).
 * If not, it redirects them to the login page.
 */
const ProtectedRoute = ({ children }) => {
  // 1. Get the current authentication state
  const { isLoggedIn, isLoading } = useAuthContext();
  
  // 2. Wait until the initial loading check (from localStorage) is complete
  if (isLoading) {
    // Optional: Render a loading spinner or message while checking auth status
    return <div>Loading user session...</div>; 
  }

  // 3. The core protection logic
  if (!isLoggedIn) {
    // User is NOT logged in. Redirect them to the /login page.
    // The 'replace: true' prevents the protected page from being in the browser history.
    return <Navigate to="/" replace={true} />;
  }

  // 4. User IS logged in. Render the requested child component.
  return children;
};

export default ProtectedRoute;