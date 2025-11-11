import React from 'react'
import AppNavbar from '../components/AppNavbar'
import AccountForm from '../components/AccountForm'
import { useAuthContext } from '../context/AuthContext'
import Footer from '../components/Footer'

const AccountPage = () => {

  const {user}=useAuthContext()

  return (
   <div className="min-h-screen bg-gray-50">
      <AppNavbar />
      
      {/* Container for main page content, using white theme styling */}
      <div className="max-w-4xl mx-auto py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Account Settings
        </h1>
        
        {/* Main Card Container */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
          
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              View and update your registered account details.
            </p>
          </div>

          {/* Account Details Form */}
          <div className="py-6">
            {/* 3. Pass the user object as the required initialData prop */}
            <AccountForm initialData={user} />
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default AccountPage
