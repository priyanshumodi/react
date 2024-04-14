import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"

export default function Protected({children,authentication=true}) {

    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state => state.status)

    useEffect(() => {

        if(authentication && authentication !== authStatus) {
            navigate("/login")
        }
        else if(!authentication && authentication !== authStatus) {
            navigate("/")
        }

        setLoader(false)
    },[authStatus,navigate,authentication])

    return loader ? <h1>Loader...</h1> : <>{children}</>
}
