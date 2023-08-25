import React from "react";
import "./Footer.css";

import { FaTelegram, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
      <div className="container ">
        <div className="footer__wrapper">
          <div className="item">
            <h1>Clenu</h1>
            <li>
              Bizda hamma yaxshi narsalar
            </li>
            <li>Yaxshi narsalarni bizdan oling</li>
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
          <div className="item">
            <h2>Biz xaqimizda</h2>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Products Return</li>
              <li>Wholesale Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
