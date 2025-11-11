import { useEffect, useState } from "react";
import { getCurrentUser, updateUserDetails } from "../api/userService";
import { login, logout, register } from "../api/authService";

// Custom hook to manage global authentication state and actions.

export const useAuth=()=>{

    const [user,setUser]=useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const storedUser=getCurrentUser()
        if(storedUser){
            setUser(storedUser)
        }
        setIsLoading(false)
    },[])


    // --- HANDLERS ---

    const handleLogin=async(email,password)=>{

        setIsLoading(true)
        const result=await login(email,password) // Call login API

        if (result && typeof result !== 'string'){
            setUser(result)
            setIsLoading(false)
            return true
        }

        setIsLoading(false)
        return false
    }

    const handleRegister=async(email,password)=>{

        setIsLoading(true)
        const result=await register(email,password) // Call register API

        if (result && typeof result !== 'string'){
            setUser(result)
            setIsLoading(false)
            return true
        }

        setIsLoading(false)
        return false
    }

    const handleLogout=()=>{
        logout() // Call logout API / clear session
        setUser(null)
    }

  const handleUpdateAccount = async (updatedData) => {
    if (!user) {
        return "Authentication error: No user session found.";
    }

    setIsLoading(true);
    
    const updatedUser = updateUserDetails(user.email, updatedData);  // Update user details

    if (updatedUser) {
        setUser(updatedUser); 
        setIsLoading(false);
        return updatedUser; // Success
    }

    setIsLoading(false);
    return "Failed to update account details."; 
  };


    return{
        user,
        isLoading,
        isLoggedIn: !!user,
        login:handleLogin,
        register:handleRegister,
        logout:handleLogout,
        updateAccount:handleUpdateAccount
    }


}