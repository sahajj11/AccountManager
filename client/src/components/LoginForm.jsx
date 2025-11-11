// src/components/auth/LoginForm.js

import React, { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Get state/actions from the global context
  const { login, isLoading } = useAuthContext(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
        return setError('Please enter both email and password.');
    }
    
    const success = await login(email, password); 

    if (success) {
      navigate('/account'); 
    } else {
      // Note: In a real app, keep this message generic for security
      setError('Invalid email or password.'); 
    }
  };

  return (
    <div className="p-2"> {/* Inner padding */}
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Welcome Back
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Error Message */}
        {error && (
            <div className="p-3 bg-red-100 text-red-700 border border-red-300 rounded-lg text-sm text-center">
                {error}
            </div>
        )}

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // Light theme input styles: white background, gray border
            className="w-full p-3 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // Light theme input styles
            className="w-full p-3 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-indigo-600 text-white font-semibold p-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Sign In'}
        </button>
      </form>

      {/* Registration Link */}
      <div className="text-sm text-gray-600 text-center mt-6">
        Don't have an account?{' '}
        <Link to="/register" className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-150">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;