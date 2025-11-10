import React from 'react'
import RegisterForm from '../components/RegisterForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RegistrationPage = () => {
  return (
    <>
    <Navbar />
    
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      {/* Centered Form Card: White background, subtle shadow, rounded corners */}
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <RegisterForm />
      </div>

    </div>

    <Footer />
    </>
  )
}

export default RegistrationPage
