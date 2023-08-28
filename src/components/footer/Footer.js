import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Clenu from '../../assets/clenu.avif'

import { FaTelegram, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
      <div className="container ">
        <div className="footer__wrapper">
          <div className="item">
          <Link to={"/"} className="nav__logo"><img src={Clenu} alt="" width={180}/></Link>

            <ul>
              <li>
                Biz Haqimizda
              </li>
              <li>
                Filyallarimiz
              </li>
            </ul>

            <div className="icon">
              <a href="https://instagram.com/hadya2020.uz">
                <button>
                  <FaInstagram />
                </button>
              </a>
              <a href="https://t.me/hadya2020">
                <button>
                  <FaTelegram />
                </button>
              </a>
              <a href="#">
                <button>
                  <FaFacebook />
                </button>
              </a>
              <a href="#">
                <button>
                  <FaYoutube />
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
