import React, { useState } from "react";
import "./Products.css";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heartSlice";
import { addToCart } from "../../context/cartSlice";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Products({ ProductsData }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const heart = useSelector((s) => s.heart.value);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="products">
        {ProductsData?.map((item) => (
          <div
            key={item._id}
            className="product"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          > 
          <div className="product__image-container" >
            <Link
              className="product-image"
              to={`/product/${item._id}`}
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
              
            >
            </Link>
                 <div
                  onClick={() => {
                    toast.success("Maxsulot savatga qo'shildi")
                    dispatch(addToCart(item))
                  }}
                  className="product__cart"
                >
                  <AiOutlineShoppingCart />
                </div>
          </div>
            {/* <img
              src={}
              // alt={item.name}
              className="product-image"
            /> */}
            <div style={{flex:1}}>
              <h5>{item.name}</h5>
              <h4>{item.price?.brm()} so'm</h4>
            </div>
            <div className="action__wrapper">
              <div className="actions">
                
                {heart.some((i) => i._id === item._id) ? (
                  <button
                    onClick={() => dispatch(removeFromHeart(item))}
                    className="product__heart"
                  >
                    <span>Sevimli</span>
                    <AiFillHeart style={{ color: "crimson" }} />
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addToHeart(item))}
                    className="product__heart"
                  >
                    <span>Qo'shish</span>
                    <AiOutlineHeart />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
