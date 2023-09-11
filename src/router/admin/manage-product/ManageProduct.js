import React, { useEffect, useState } from "react";
import axios from "../../../api";
import { toast } from "react-toastify";
import Skeleton from "../../../components/skeleton/Skeleton";

import "./ManageProduct.css";

const PAGE_COUNT = 8;

const ManageProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get("/get/products")
      .then((res) => {
        setData(res.data.innerData);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Mahsulotlarni yuklashda xatolik!");
      });
  }, []);

  const toggleValid = (productId, currentValid) => {
    setLoading(true)
    axios
      .put(`/update/product/${productId}`, { valid: !currentValid })
      .then((res) => {
        const updatedProduct = res.data.innerData;
        setData((prevData) =>
          prevData.map((item) =>
            item._id === productId
              ? { ...item, valid: updatedProduct.valid }
              : item
          )
        );
      })
      .catch((err) => {
        console.error(err);
        toast.error("Ichki Xatolik!!!");
      })
      .finally(()=> setLoading(false))
  };

  return (
    <div className="manage__product">
      <h2>Mahsulotlarni boshaqarish</h2>
      {data.length ? (
        <>
          <div className="manage__product__wrapper">
            {data?.slice(0, PAGE_COUNT * count)?.map((item) => (
              <div key={item._id}>
                <div className="image__wrapper">
                  <img src={item.url[0]} alt="" />
                  <p className={`${item.valid ? "valid" : "invalid"}`}>
                    {item.valid ? "Sotuvda bor" : "Sotuvda yo'q"}
                  </p>
                </div>
                <p>{item.category}</p>
                <h3>{item.name}</h3>

                <button
                  disabled={loading}
                  className={`toggleValid ${item.valid ? "red" : "blue"}`}
                  onClick={() => toggleValid(item._id, item.valid)}
                >
                  {loading? "Kuting..." : item.valid ? "Sotuvdan olish" : "Sotuvga qo'yish"}
                </button>
              </div>
            ))}
          </div>
          <br />
          <br />
          {data.length / PAGE_COUNT > count ? (
            <button
              className="sort__category-btn"
              onClick={() => setCount((p) => p + 1)}
            >
              Ko'proq ko'rish
            </button>
          ) : (
            <></>
          )}
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default ManageProduct;
