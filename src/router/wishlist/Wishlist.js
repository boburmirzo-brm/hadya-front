import React, { useEffect } from "react";
import "./Wishlist.css";
import Products from "../../components/products/Products";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";

function Wishlist() {
  const heart = useSelector((s) => s.heart.value);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="wishlist">
      {heart.length ? (
        <Products ProductsData={heart} />
      ) : (
        <Empty title="Sevimlilar" data={heart} />
      )}
    </div>
  );
}

export default Wishlist;
