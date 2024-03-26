import React from "react";
import UserContext from "./UserContext";

// children is like outlet jo aa rha hai aage pass kr do
const UserContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;