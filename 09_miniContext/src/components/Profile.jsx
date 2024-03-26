import React,{useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext);

    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
    
}

export default Profile

/* 
import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    
    if(user){
        return <div>welcome {user}</div>
    }
    else {
        return <div>Login please</div>
    }
}

export default Profile
*/