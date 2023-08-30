import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
const icons = [
  { filial: "Filiallar" },
  { haqimizda: "Biz haqimizda " },
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
              <span> <Link to={"/about"}>{icon.filial}</Link> </span>
              <span> <Link to={"/branches"}>{icon.haqimizda}</Link> </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;