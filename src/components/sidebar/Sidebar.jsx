import React from 'react';
import './Sidebar.css';
import { AiOutlineSearch,
  AiOutlineUser, 
  AiOutlineHeart, 
  AiOutlineShoppingCart, 
  AiOutlineMenu, 
  AiOutlineHome } from "react-icons/ai"
const icons = [
  { name: "Search", icon: <AiOutlineSearch /> },
  { name: "Login ", icon: <AiOutlineUser /> },
  { name: "Heart", icon: <AiOutlineHeart/> },
  { name: "Cart", icon: <AiOutlineShoppingCart /> },
];

function Sidebar({ show, setShow }) {
  return (
    <>
      {show ? <div className='sidebar__shadow' onClick={() => setShow(false)}></div> : <></>}
      <div className={`sidebar ${show ? 'show' : ''}`}>
        <div className="sidebar__content">
          {icons.map((icon, index) => (
            <div className="sidebar__item" key={index}>
              
              <div className="sidebar__icon">{icon.icon}</div>
              <span>{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;