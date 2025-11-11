import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gradient-to-r from-indigo-700 to-violet-500 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <p className='text-2xl font-bold text-white'>Account Manager</p>
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Account Manager  provides a clean, secure, and modern foundation for user identity management.
                </p>
            </div>
            <div className="border-t border-[#3B1A7A]">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://prebuiltui.com">AccountManager</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
