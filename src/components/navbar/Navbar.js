import React, {useState} from 'react'
import { AiOutlineSearch,
 AiOutlineUser, 
 AiOutlineHeart, 
 AiOutlineShoppingCart, 
 AiOutlineMenu, 
 AiOutlineHome } from "react-icons/ai"
import {Link} from "react-router-dom"
import Sidebar from '../sidebar/Sidebar'
import Clenu from "../../assets/clenu.avif"
import "./Navbar.css"
function Navbar() {
    const [show, setShow] = useState(false  )
    document.body.style.overflow = show ? "hidden" : "auto"
    return (
        <>
        <div className='container navbar__main'>
            <Link to={"/"} className="nav__logo"><img src={Clenu} alt="" /></Link>
            <button  onClick={() => setShow(true)} className="nav__btn">
              <AiOutlineMenu/>  
            </button>
            <ul className="nav__collection">
                <Link to={"/search"} className="nav__item">
                    <AiOutlineSearch />
                </Link>
                <Link to={"/admin"} className="nav__item">
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
        <Sidebar show={show} setShow={setShow}/> 
        </>
    )
}

export default Navbar