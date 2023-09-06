import React, { useState } from "react";
import "./Products.css";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heart";
import { addToCart } from "../../context/cart";

import { Link } from "react-router-dom";

function Products({ ProductsData }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const heart = useSelector((s) => s.heart.value);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="products">
        {ProductsData?.map((item, id) => (
          <div
            key={id}
            className="product"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link
              className="product-image"
              to={`/product/${item.name.toLowerCase().split(" ").join("-")}`}
              state={item}
              style={{
                background: `url(${
                  hoveredItem === item
                    ? item.url[1]
                      ? item.url[1]
                      : item.url[0]
                    : item.url[0]
                }) no-repeat center/cover`,
              }}
            ></Link>
            {/* <img
              src={}
              // alt={item.name}
              className="product-image"
            /> */}
            <Link
              to={`/product/${item.name.toLowerCase().split(" ").join("-")}`}
              state={item}
            >
              <h5>{item.name}</h5>
              <h4>{item.price?.brm()} so'm</h4>
            </Link>
            <div className="action__wrapper">
              <div className="actions">
                <div className="product__cart">
                  <AiOutlineShoppingCart
                    onClick={() => dispatch(addToCart(item))}
                  />
                </div>
                <button className="product__heart">
                  {heart.some((i) => i.name === item.name) ? (
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
