import React, {useState} from 'react'
import { 
 AiOutlineUser, 
 AiOutlineHeart, 
 AiOutlineShoppingCart, 
 AiOutlineMenu,
 AiOutlineHome } from "react-icons/ai"
import {Link, useLocation} from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/hadya-logo.png"
import Sidebar from '../sidebar/Sidebar'

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
            <>
        <div className='navbar'>
        <div className='container navbar__main'>
            <Link to={"/"} className="nav__logo"><img src={logo} alt="" /> </Link>
            <button className='nav__btn' onClick={()=> setShow(true)}><AiOutlineMenu/></button>
            <div className="item1">
            <ul>
              <Link to={"/about"}>
                <li>Biz Haqimizda</li>
              </Link>
              <Link to={"/branches"}>
              <li>Filyallarimiz</li>
              </Link>
            </ul>
            </div>

            <ul className="nav__collection">
                <Link to={"/"} className="nav__item">
                    <AiOutlineHome />
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
        </div>
        <Sidebar show={show} setShow={setShow}/> 
</>
    )
}

export default Navbar