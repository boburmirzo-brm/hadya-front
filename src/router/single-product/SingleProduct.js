import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heart";
const SingleProduct = () => {
  const { state } = useLocation();

  const [mainImage, setMainImage] = useState(state.url[0]);

  const dispatch = useDispatch();
  const heart = useSelector((s) => s.heart.value);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="single__product__container">
      <div className="single__product">
        <div className="single__product__images">
          <div className="additional__images">
            {state.url.map((item) => (
              <img
                key={item}
                src={item}
                alt=""
                onClick={() => setMainImage(item)}
              />
            ))}
          </div>
          <img className="main__image" src={mainImage} alt="" />
        </div>
        <div className="single__product__description">
          <h3>{state.name}</h3>
          <h5>${state.price}.00</h5>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
            laboriosam nisi hic vitae dignissimos enim.
          </div>
          <div className="single__buttons">
            {heart.some((i) => i.name === state.name) ? (
              <button
                onClick={() => dispatch(removeFromHeart({ name: state.name }))}
              >
                Saralangandan olish
              </button>
            ) : (
              <button onClick={() => dispatch(addToHeart(state))}>
                Saralanganlarga qo'shish
              </button>
            )}
            <button>Savatchaga qo'shish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
