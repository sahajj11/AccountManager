// src/components/common/Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';


const AppNavbar = () => {
  // Access the current user and the logout function from the global context
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Calls the central logout function (which clears local storage and state)
    navigate('/login'); // Redirect to the login page after logging out
  };

  return (
    // Top-level container: White theme, border bottom, shadow for elevation
    <nav className=" shadow-md bg-gradient-to-r from-indigo-700 to-violet-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/App Name */}
          <div className="flex-shrink-0">
            <Link to="/account" className="text-2xl font-bold text-white">
              AccountManager Pro
            </Link>
          </div>

          {/* User Info and Actions */}
          <div className="flex items-center space-x-4">
            {user && (
              <span className="text-white text-base font-medium hidden sm:block">
                Welcome, {user.name || user.email}
              </span>
            )}
            
            

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-red-600 transition duration-150 shadow-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;