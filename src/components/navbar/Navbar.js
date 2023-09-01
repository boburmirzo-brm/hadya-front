import React, {useState} from 'react'
import { 
 AiOutlineUser, 
 AiOutlineHeart, 
 AiOutlineShoppingCart, 
 AiOutlineHome } from "react-icons/ai"
import {Link, useLocation} from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/hadya-logo.png"

function Navbar() {
    const {pathname} = useLocation()
    const [show, setShow] = useState(false  )
    document.body.style.overflow = show ? "hidden" : "auto"

    if(pathname.includes("login")){
        return <></>
    }
    if(pathname.includes("admin")){
        return <></>
    }
    return (
        <div className='navbar'>
        <div className='container navbar__main'>
            <Link to={"/"} className="nav__logo"><img src={logo} alt="" /> </Link>
            <div className="nav__search">
            <input type="text" placeholder='Qidirish...' />
            </div>
            <ul className="nav__collection">
                <Link to={"/"} className="nav__item">
                    <AiOutlineHome />
                </Link>
                <Link to={"/login"} className="nav__item">
                    <AiOutlineUser />
                </Link>
                <Link to={"/wishlist"} className="nav__item">
                    <AiOutlineHeart />
                </Link>
                <Link to={"/cart"} className="nav__item">
                    <AiOutlineShoppingCart />
                </Link>
            </ul>
        </div>
        </div>
    )
}

export default Navbar