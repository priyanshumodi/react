import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
       e.preventDefault();
       setUser({username,password});
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            onChange={(e)=>setUsername(e.targer.value)}
            placeholder="usename"/>
            <input type="text" 
            value={password}
            onChange={(e)=>setPassword(e.targer.value)}
            placeholder="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;