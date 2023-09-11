import React, { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import { BsFillCartDashFill } from "react-icons/bs";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import { addToHeart, removeFromHeart } from "../../context/heart";
import ZoomImage from "../../components/zoom-image/ZoomImage";

const SingleProduct = () => {
  const { state } = useLocation();
  const [zoom, setZoom] = useState(null);

  const [mainImage, setMainImage] = useState(state.url[0]);
  const dispatch = useDispatch();
  const heart = useSelector((s) => s.heart.value);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);



  return (
    <div className="container">
      <div className="single__product">
        <div className="single__product__images">
          <img onClick={()=> setZoom(state?.url)} className="main__image" src={mainImage} alt="" />
          <br />
          <div className="additional__images">
            {state?.url.map((item) => (
              <img
                key={item}
                src={item}
                alt=""
                onClick={() => setMainImage(item)}
              />
            ))}
          </div>
        </div>
        <div className="single__product__description">
          <div className="single__price">
            <h1>{state?.name}</h1>
            <h2>{state?.price?.brm()} so'm</h2>
            <p>{state?.desc}</p>
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
      {zoom && <ZoomImage urls={zoom} setZoom={setZoom} />}
    </div>
  );
};

export default SingleProduct;
