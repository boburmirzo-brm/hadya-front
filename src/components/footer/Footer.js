import React from "react";
import "./Footer.css";
import {
  AiOutlineTwitter,
  AiOutlineBehance,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IoBasketballOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="footer">
      <div className="container ">
        <div className="footer__wrapper">
          <div className="item">
            <h1>Clenu</h1>
            <h5>
              Sophisticated simplicity <br />
              independent mind.
            </h5>
            <div className="icon">
              <button>
                <AiOutlineTwitter />
              </button>
              <button>
                {" "}
                <IoBasketballOutline />
              </button>
              <button>
                <AiOutlineBehance />
              </button>
              <button>
                <AiOutlineInstagram />
              </button>
            </div>
          </div>
          <div className="item">
            <h2>Help</h2>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Products Return</li>
              <li>Wholesale Policy</li>
            </ul>
          </div>
          <div className="item">
            <h2>About Us</h2>
            <ul>
              <li>Pagination</li>
              <li>Terms & Conditions</li>
              <li>Contact</li>
              <li>Accessories</li>
              <li>Home Page</li>
            </ul>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <ul>
              <li>Menu items</li>
              <li>Help Center</li>
              <li>Address Store</li>
              <li>Privacy Policy</li>
              <li>HomePage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
