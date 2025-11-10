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
        const result=await login(email,password)

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
        const result=await register(email,password)

        if (result && typeof result !== 'string'){
            setUser(result)
            setIsLoading(false)
            return true
        }

        setIsLoading(false)
        return false
    }

    const handleLogout=()=>{
        logout()
        setUser(null)
    }

  const handleUpdateAccount = async (updatedData) => {
    if (!user) {
        return "Authentication error: No user session found.";
    }

    setIsLoading(true);
    
    // 1. Call the business logic layer (accountService) to persist the change
    const updatedUser = updateUserDetails(user.email, updatedData); 

    if (updatedUser) {
        // 2. Update the local React state (which flows to AuthContext)
        setUser(updatedUser); 
        setIsLoading(false);
        return updatedUser; // Success
    }

    setIsLoading(false);
    return "Failed to update account details."; // Failure
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