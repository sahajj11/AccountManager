import React from 'react'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AppNavbar from '../components/AppNavbar'

const LoginPage = () => {
  return (
    <>
    <Navbar/>

    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      {/* Centered Form Card */}
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <LoginForm />
      </div>

    </div>

    <Footer />
    </>
  )
}

export default LoginPage
