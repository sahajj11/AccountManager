// src/components/auth/RegisterForm.js

import React, { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { register, isLoading } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Client-side validation
    if (!name || !email || !password) {
      return setError('Please fill in all fields.');
    }
    if (password.length < 6) {
        return setError('Password must be at least 6 characters long.');
    }

    const result = await register({ name, email, password }); 

    if (result === true) { 
      // Success: User is registered and auto-logged in
      navigate('/account'); 
    } else {
      // Error message from the service layer (e.g., 'User already exists')
      setError(result || 'Registration failed. Please try again.'); 
    }
  };

  return (
    <div className="p-2"> 
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Create Your Account
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Error Message */}
        {error && (
            <div className="p-3 bg-red-100 text-red-700 border border-red-300 rounded-lg text-sm text-center">
                {error}
            </div>
        )}

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // Light theme input styles
            className="w-full p-3 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="John Doe"
            required
          />
        </div>

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
            // Light theme input styles
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
          {isLoading ? 'Registering...' : 'Sign Up'}
        </button>
      </form>

      {/* Login Link */}
      <div className="text-sm text-gray-600 text-center mt-6">
        Already have an account?{' '}
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-150">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;