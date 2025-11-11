// --- User Data Fetching Functions ---

// A function to get all users from local storage
export const getUsers=()=>{
    const users=localStorage.getItem('users')
    return users ? JSON.parse(users) : []
}

// A function to save the user array back to local storage
export const saveUsers=(users)=>{
    localStorage.setItem('users',JSON.stringify(users))
} 

// A function to get the currently logged-in user from storage.
export const getCurrentUser=()=>{

    const email=localStorage.getItem('currentUserEmail')
    if (!email) return null

    const users=getUsers()
    const user=users.find(u=>u.email===email)

    // Cleanly strip the password before returning the user object to the app
    if(user){
        const {password,...safeUser}=user
        return safeUser
    }

    return null
}


// A function to update the user's details.
export const updateUserDetails = (email, updatedData) => {
    const users = getUsers();
    const index = users.findIndex(u => u.email === email);
    
    if (index !== -1) {
        // Create the new user object
        const updatedUser = { 
            ...users[index], 
            ...updatedData 
        };
        
        // Ensure password isn't accidentally overwritten if not provided
        if (updatedData.password === '') {
             delete updatedUser.password;
        }

        users[index] = updatedUser;
        saveUsers(users);

        // Strip password before returning
        const { password, ...safeUser } = updatedUser;
        return safeUser;
    }
    return null;
};
