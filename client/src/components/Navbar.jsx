import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Main navigation bar */}
      <nav class="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-indigo-700 to-violet-500 transition-all">

          {/* Brand Name */}
          <p className="text-2xl font-bold text-white">Account Manager</p> 
        
      </nav>
    </div>
  );
};

export default Navbar;
 