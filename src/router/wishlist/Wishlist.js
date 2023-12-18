import React, { useEffect } from "react";
import "./Wishlist.css";
import Products from "../../components/products/Products";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import photo from "../../assets/not__img.png"

function Wishlist() {
  const heart = useSelector((s) => s.heart.value);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="wishlist">
      {heart.length ? (
        <>
        <h2 className="container category__title text__left">Sevimlilar ro'yhati</h2>
        <br />
        <Products ProductsData={heart} />
        </>
      ) : (
        <Empty title="Sevimlilar" url={photo} />
      )}
    </div>
  );
}

export default Wishlist;
