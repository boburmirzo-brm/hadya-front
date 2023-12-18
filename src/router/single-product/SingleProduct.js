import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heartSlice";
import { addToCart } from "../../context/cartSlice";
import Notefaund from "../notefaund/Notefaund";
import { toast } from 'react-toastify';
import { useGetProductsQuery } from "../../context/productsApi";
import Skeleton from "../../components/skeleton/Skeleton";
import Products from "../../components/products/Products";


const SingleProduct = () => {
  const { state } = useLocation();
  const {data, isLoading} = useGetProductsQuery({ valid: true })

  const [mainImage, setMainImage] = useState(state?.url[0]);
  const dispatch = useDispatch();
  const heart = useSelector((s) => s.heart.value);

  const addCart = () => {
    toast.success("Maxsulot savatga qo'shildi")
    dispatch(addToCart(state))
  }
  useEffect(() => {
    setMainImage(state?.url[0])
    window.scroll(0, 0);
  }, [state]);

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
              <img key={item} src={item} alt="" onClick={() => setMainImage(item)} />
            ))}
          </div>
        </div>
        <div className="single__product__description">
          <div className="single__product__description_top">
            <div className="single__product-title">
              <h1>{state?.name}</h1>
              <div className="single__product-heart-btn">
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
              <li>Yuqori sifat</li>
              <li>Chiroyli ko'rinishga ega</li>
              <li>Albatta mazali</li>
            </ul>
          <div className="single__buttons">
            {/* {myCart ? (
              <button onClick={() => dispatch(removeFromCart(state))}>
                <BsFillCartCheckFill className="single__icon" />
                Savatdan olish
              </button>
            ) : ( */}
              <button onClick={addCart}>
                <BsFillCartDashFill className="single__icon" />
                Savatga qoshish
              </button>
            {/* )} */}
          </div>
        </div>
      </div>
          
      <h2 className="container category__title">Eng so'ngi qo'shilganlar</h2>
      <br />
      {
          isLoading ? <Skeleton/> : <Products ProductsData={data?.innerData.slice(0, 4)} />
      }
    </div>
  );
};

export default SingleProduct;
