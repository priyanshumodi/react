import React, { Children } from "react";
import UserContext from "./UserContext";

// children is like outlet jo aa rha hai aage pass kr do
const UserContextProvider = ({Children}) => {
    const [user,setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user,setUser}}>
        {Children}
        </UserContext.Provider>
    )
}

export default UserContextProvider