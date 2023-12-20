import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import Hadya from "../../assets/hadya-logo.png"
import { category } from '../../static';
import { FaInstagram, FaTelegram } from 'react-icons/fa';


function Sidebar({ show, setShow }) {
  return (
    <>
      {show ? <div className='sidebar__shadow' onClick={() => setShow(false)}></div> : <></>}
      <div className={`sidebar ${show ? 'show' : ''}`}>
        <div className="sidebar__content">
          <Link to={"/"} onClick={()=> setShow(false)}>
          <img src={Hadya} alt="" />
          </Link>
            <div className="sidebar__item" > 
              <Link onClick={() => setShow(false)} to={"/about"}>Biz haqimizda</Link> 
              <Link onClick={() => setShow(false)} to={"/branches"}>Filiallar</Link> 
              <b>Kategoriya</b>
              <hr  className='hr'/>
                {
                  category?.map((item) =>
                    <Link onClick={() => setShow(false)} to={`/products/${item.link}`} key={item.id}>
                      <p>{item.title}</p>
                    </Link>
                  )
                }
                <b>Ijtimoiy tarmoqlarimiz</b>
                <hr className='hr'/>
                <a target='_blank' rel="noreferrer" className='sidebar__link' href="https://instagram.com/hadya2020.uz">
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a target='_blank' rel="noreferrer" className='sidebar__link' href="https://t.me/hadya2020">
                    <FaTelegram />
                    <span>Telegram</span>
                </a>
              </div>
        </div>
        <p className='sidebar__namtech'>© 2023 NamTech Solution Inc.</p>
      </div>
    </>
  );
}

export default Sidebar;