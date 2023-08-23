import React, { useState } from "react";
import "./Products.css";
import { ProductsData } from "./data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function Products() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="container">
      <div className="products">
        {ProductsData?.map((item, id) => (
          <div
            key={item.name}
            className="product"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={hoveredItem === item ? item.url[1] : item.url[0]}
              alt={item.name}
              className="product-image"
            />
            <div className="action__wrapper">
              <div className="actions">
                <div className="cart">
                  <AiOutlineShoppingCart />
                </div>
                <div className="search">
                  <AiOutlineSearch />
                </div>
                <div className="heart">
                  <AiOutlineHeart />
                </div>
              </div>
            </div>
            <div>
              <h5>{item.name}</h5>
              <h4>${item.price}.00</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
