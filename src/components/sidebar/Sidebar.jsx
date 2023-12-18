import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import Hadya from "../../assets/hadya-logo.png"
import { category } from '../../static';
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
          <img src={Hadya} alt="" />
            <div className="sidebar__item" > 
              <Link onClick={() => setShow(false)} to={"/about"}>Biz haqimizda</Link> 
              <Link onClick={() => setShow(false)} to={"/branches"}>Filiallar</Link> 
              <hr  className='hr'/>
              <b>Kategoriya</b>
                {
                  category?.map((item) =>
                    <Link onClick={() => setShow(false)} to={`/products/${item.link}`} key={item.id}>
                      <p>{item.title}</p>
                    </Link>
                  )
                }
              </div>
        </div>
        <p className='sidebar__namtech'>© 2023 NamTech Solution Inc.</p>
      </div>
    </>
  );
}

export default Sidebar;