import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import { addToHeart, removeFromHeart } from "../../context/heartSlice";
import { addToCart, removeFromCart } from "../../context/cartSlice";
import Notefaund from "../notefaund/Notefaund";

const SingleProduct = () => {
  const { state } = useLocation();

  const [mainImage, setMainImage] = useState(state?.url[0]);
  const dispatch = useDispatch();
  const heart = useSelector((s) => s.heart.value);
  const cart = useSelector((s) => s.cart.value);
  const myCart = cart.find((i) => i.id === cart.id);

  const addCart = () => {
  }
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (!state) {
    return <Notefaund />;
  }

  return (
    <div className="container">
      <div className="single__product">
        <div className="single__product__images">
          <img className="main__image" src={mainImage} alt="" />
          <br />
          <div className="additional__images">
            {state?.url.map((item) => (
              <img key={item} src={item} onClick={() => setMainImage(item)} />
            ))}
          </div>
        </div>
        <div className="single__product__description">
          <div className="single__product__description_top">
            <div className="single__product-title">
              <h1>{state?.name}</h1>
              {heart.some((i) => i.name === state.name) ? (
                <button
                  onClick={() =>
                    dispatch(removeFromHeart({ name: state.name }))
                  }
                >
                  <AiFillHeart className="single__icon"  style={{color: 'red'}} />
                  <span>Istaklarda</span>
                </button>
              ) : (
                <button onClick={() => dispatch(addToHeart(state))}>
                  <AiOutlineHeart className="single__icon" />
                  <span>Istaklarga</span>
                </button>
              )}
            </div>
            <div className="price">
              <p>Narxi:</p>
              <p className="sinlge__price">{state?.price?.brm()} so'm</p>
            </div>
            <div className="description">
              <p>{state?.desc}</p>
            </div>
          </div>
            <ul className="single__ul">
              <li>Mazzali  tort</li>
              <li>Mazzali  tort</li>
              <li>Mazzali  tort</li>
            </ul>
          <div className="single__buttons">
            {/* {myCart ? (
              <button onClick={() => dispatch(removeFromCart(state))}>
                <BsFillCartCheckFill className="single__icon" />
                Savatdan olish
              </button>
            ) : ( */}
              <button onClick={() => dispatch(addToCart(state))}>
                <BsFillCartDashFill className="single__icon" />
                Savatga qoshish
              </button>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
