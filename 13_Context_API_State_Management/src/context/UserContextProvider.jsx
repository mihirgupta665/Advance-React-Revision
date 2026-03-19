import React, { useState } from "react"
import UserContext from "./UserContext.js"

const UserContextProvider = ({ children }) => {

    const [user, setUser] = React.useState(null)

    return (
        // what is UserContext.Provider a component or something and in value we pass a object but in object there are only variabel but object contain key value pairs so how is this a object
        <UserContext.Provider value={{user, setUser}}>      
            {children}
        </UserContext.Provider >
    )
}

export default UserContextProvider
