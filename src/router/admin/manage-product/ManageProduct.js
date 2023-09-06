import React, { useEffect, useState } from "react";
import axios from "../../../api";
import { toast } from "react-toastify";

import "./ManageProduct.css";
import Skeleton from "../../../components/skeleton/Skeleton";

const ManageProduct = () => {
  const [data, setData] = useState([]);

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
      });
  };

  return (
    <div className="manage__product">
      <h2>Manage Product</h2>
      {data.length ? (
        <div className="manage__product__wrapper">
          {data?.map((item) => (
            <div key={item._id}>
              <div className="image__wrapper">
                <img src={item.url[0]} alt="" />
                <p>{item.valid ? "Sotuvda bor" : "Sotuvda yo'q"}</p>
              </div>
              <p>{item.category}</p>
              <h3>{item.name}</h3>

              <button onClick={() => toggleValid(item._id, item.valid)}>
                {item.valid ? "Sotuvdan olish" : "Sotuvga qo'yish"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="manage__product__loader">
          <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProduct;
