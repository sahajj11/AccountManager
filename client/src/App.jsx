import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthProvider from './context/AuthContext'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import ProtectedRoute from './components/common/ProtectedRoute'
import AccountPage from './pages/AccountPage'

function App() {
  
  return (
    <>
     {/* Provide global authentication state to the app */}
      <AuthProvider>
        <BrowserRouter>
          {/* Define routes for the app */}
          <Routes>
            {/* Public routes */}
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegistrationPage />} />

            {/* Protected route: only accessible if user is logged in */}
            <Route path="/account" element={<ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>} />
          </Routes>
       
        </BrowserRouter>

      </AuthProvider>
    </>
  )
}

export default App
