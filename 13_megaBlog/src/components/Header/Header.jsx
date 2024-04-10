import React from "react";
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
function Header() {
    const authStatus = useSelector(state => state.status)
    return (
       <div>
        jai shree ram
       </div>
    )
}

export default Header;