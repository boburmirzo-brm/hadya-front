import React, { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import { BsFillCartDashFill } from "react-icons/bs";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import { addToHeart, removeFromHeart } from "../../context/heart";

const SingleProduct = () => {
  const { state } = useLocation();

  const [mainImage, setMainImage] = useState(state.url[0]);
  const [quantity, setQuantity] = useState(1); 
  const dispatch = useDispatch();
  const heart = useSelector((s) => s.heart.value);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const totalPrice = state.price * quantity;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
          <br />
          <img className="main__image" src={mainImage} alt="" />
         
        </div>
        <div className="single__product__description">
          <h3>{state.name}</h3>
          <div className="single__price">
            <div className="single__desc">
            <h2>{state.desc}</h2>
          </div>
            <h5>{totalPrice} so'm</h5>
            <div className="single__count">
              <button onClick={handleIncrement}>+</button>
              <p>{quantity}</p>
              <button onClick={handleDecrement}>-</button>
            </div>
          </div>
          
          <div className="single__buttons">
            {heart.some((i) => i.name === state.name) ? (
              <button
                onClick={() => dispatch(removeFromHeart({ name: state.name }))}
              >
                <BsFillCartCheckFill className="single__icon" /> &nbsp;
                Saralangandan olish
              </button>
            ) : (
              <button onClick={() => dispatch(addToHeart(state))}>
                <BsFillCartDashFill className="single__icon" />&nbsp;
                Saralanganlarga qo'shish
              </button>
            )}
            <Link to={"/"}>
            <button className="single__to__home">Bosh Sahifaga qaytish</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
