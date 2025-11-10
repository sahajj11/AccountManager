import { getUsers, saveUsers } from "./userService"

// --- Authentications Functions ---

//Simulates a user login API call
export const login=(email,password)=>{

    const users=getUsers()
    const user=users.find((u)=>u.email===email && u.password===password)

    if(user){
        localStorage.setItem('currentUserEmail',user.email)
        console.log(`User ${user.email} logged in successfully.`);
        return { id: user.id, email: user.email, name: user.name || 'User' }
    }

    return null
}

//Simulates a user registration API call
export const register=(userData)=>{
    
    const users=getUsers()

    if(users.find((u)=>u.email===userData.email)){
        return "User already exists with this email."
    }

    const newUser={
        id:Date.now(),
        ...userData
    }

    saveUsers([...users,newUser])

    localStorage.setItem('currentUserEmail',newUser.email)
    return { id: newUser.id, email: newUser.email, name: newUser.name }
}

//Clears the user session.
export const logout=()=>{

    localStorage.removeItem('currentUserEmail')
    console.log('User logged out.')
}
