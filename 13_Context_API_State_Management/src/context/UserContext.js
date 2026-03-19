// UserContext = React.createContext()
// UserContextProvider = ({children}) => { <UserContext.Provider value={{states}} > {children} </UserContext.Provider> }
// {store or setstore or both } = useContext(Named_Context) : this will give the passed store during Context.Provider full access 
// <UserContextProvider> wrap components </UserContextProvider> : which go in form of children to Context

import React from "react"

const UserContext =  React.createContext()      // what is usercontext a object or a class

export default UserContext;