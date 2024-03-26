import React,{useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext);
    if(user){
        return <div>welcome {user}</div>
    }
    else {
        <div>Login please</div>
    }
}

export default Profile;