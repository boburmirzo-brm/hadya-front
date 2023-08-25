import React, { useState } from "react";
import "./Products.css";
import { ProductsData } from "../../static";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heart";

function Products() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const heart = useSelector((s) => s.heart.value);
  console.log(heart);

  const dispatch = useDispatch();

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
              // alt={item.name}
              className="product-image"
            />
            <div>
              <h5>{item.name}</h5>
              <h4>${item.price}.00</h4>
            </div>
            <div className="action__wrapper">
              <div className="actions">
                <div className="cart">
                  <AiOutlineShoppingCart />
                </div>
                <button className="heart">
                  {heart.some((i) => i.id === item.id) ? (
                    <AiFillHeart
                      style={{ color: "#000" }}
                      onClick={() => dispatch(removeFromHeart(item))}
                    />
                  ) : (
                    <AiOutlineHeart
                      onClick={() => dispatch(addToHeart(item))}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
