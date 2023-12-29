import React from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import { FaTelegram, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../../assets/hadya-logo.png";

function Footer() {
  const { pathname } = useLocation();

  if (pathname.includes("login")) {
    return <></>;
  }
  if (pathname.includes("admin")) {
    return <></>;
  }
  return (
    <div className="footer">
      <div className="container ">
        <div className="footer__wrapper">
          <div className="item">
            <Link to={"/"}>
              <img className="footer__logo" src={logo} alt="" />
            </Link>
            <ul>
              <Link to={"/about"}>
                <li>Biz Haqimizda</li>
              </Link>
              <Link to={"/branches"}>
              <li>Filiallarimiz</li>
              </Link>
            </ul>

            <div className="icon">
              <a href="https://instagram.com/hadya2020.uz" target="_blank">
                <button>
                  <FaInstagram />
                </button>
              </a>
              <a href="https://t.me/hadya2020" target="_blank">
                <button>
                  <FaTelegram />
                </button>
              </a>
             
              
            </div>
          </div>
        </div>
      <p className="footer__company-name">&copy; 2023{2023 === new Date().getFullYear() ? "" : "-"+new Date().getFullYear()} <a target="_blank" href="https://www.namtech.uz/">NamTech Solution</a> Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
