import React, {useState} from 'react'
import { AiOutlineSearch,
 AiOutlineUser, 
 AiOutlineHeart, 
 AiOutlineShoppingCart, 
 AiOutlineHome } from "react-icons/ai"
import {Link} from "react-router-dom"
import Clenu from "../../assets/clenu.avif"
import "./Navbar.css"
function Navbar() {
    const [show, setShow] = useState(false  )
    document.body.style.overflow = show ? "hidden" : "auto"
    return (
        <div className='navbar'>
        <div className='container navbar__main'>
            <Link to={"/"} className="nav__logo"><img src={Clenu} alt="" /></Link>
            <ul className="nav__collection">
                <Link to={"/home"} className="nav__item">
                    <AiOutlineHome />
                </Link>
                <Link to={"/about"} className="nav__item">
                    <AiOutlineSearch />
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