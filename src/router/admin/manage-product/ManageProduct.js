import React, { useEffect, useState } from "react";
import axios from "../../../api";
import { toast } from "react-toastify";
import Skeleton from "../../../components/skeleton/Skeleton";
import "./ManageProduct.css";
import {useGetProductQuery, useDeleteProductMutation,useValidProductMutation} from "../../../context/prApi"

const PAGE_COUNT = 8;

const ManageProduct = () => {
  // const [datas, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const {data, isLoading} = useGetProductQuery(["/get/products"])
  const [ deleteProduct, {isLoading: deleteLoading} ] = useDeleteProductMutation()
  const [ validToggle, {isLoading: validLoading} ] = useValidProductMutation()

  // useEffect(() => {
  //   axios
  //     .get("/get/products")
  //     .then((res) => {
  //       setData(res.data.innerData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error("Mahsulotlarni yuklashda xatolik!");
  //     });
  // }, []);

  // const toggleValid = (productId, currentValid) => {
  //   setLoading(true)
  //   axios
  //     .put(`/update/product/${productId}`, { valid: !currentValid })
  //     .then((res) => {
  //       const updatedProduct = res.data.innerData;
  //       setData((prevData) =>
  //         prevData.map((item) =>
  //           item._id === productId
  //             ? { ...item, valid: updatedProduct.valid }
  //             : item
  //         )
  //       );
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       toast.error("Ichki Xatolik!!!");
  //     })
  //     .finally(()=> setLoading(false))
  // };
  const toggleValid = (_id, valid)=>{
    validToggle({path:"/update/product", _id, body: {valid:!valid}})
  }

  const deletePro = (_id)=>{
    deleteProduct({path:`/delete/product`, _id:_id})
      .then(res=> console.log(res))
      .catch(res=> console.log(res))
  }
  return (
    <div className="manage__product">
      <h2>Mahsulotlarni boshaqarish</h2>
      {data?.innerData.length ? (
        <>
          <div className="manage__product__wrapper">
            {data?.innerData?.slice(0, PAGE_COUNT * count)?.map((item) => (
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
                  disabled={validLoading}
                  className={`toggleValid ${item.valid ? "red" : "blue"}`}
                  onClick={() => toggleValid(item._id, item.valid)}
                >
                  {validLoading? "Kuting..." : item.valid ? "Sotuvdan olish" : "Sotuvga qo'yish"}
                </button>
                <button disabled={deleteLoading} onClick={()=> deletePro(item._id)}>Delete</button>
              </div>
            ))}
          </div>
          <br />
          <br />
          {data?.innerData?.length / PAGE_COUNT > count ? (
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
