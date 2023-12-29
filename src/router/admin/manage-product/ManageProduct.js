import React, { useEffect, useState } from "react";
import axios from "../../../api";
import { toast } from "react-toastify";
import Skeleton from "../../../components/skeleton/Skeleton";
import "./ManageProduct.css";
import {useUpdateProductMutation,useDeleteProductMutation,useGetProductsQuery} from "../../../context/productsApi"

const PAGE_COUNT = 8;

const ManageProduct = () => {
  // const [datas, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const {data, isLoading} = useGetProductsQuery()
  const [ deleteProduct, {isLoading: deleteLoading} ] = useDeleteProductMutation()
  const [ validToggle, {isLoading: validLoading} ] = useUpdateProductMutation()

  const toggleValid = (_id, valid)=>{
    validToggle({_id, body: {valid:!valid}})
      .then(res=>{
        console.log(res);
        if(res.error){
          toast.error(res.error.data.msg)
        }
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  const deletePro = (_id)=>{
    if(window.confirm("Ishonchingiz komilmi?")){
      deleteProduct( _id )
        .then(res=>{
          console.log(res);
          if(res.error){
            toast.error(res.error.data.msg)
          }
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  }
  return (
    <div className="manage__product">
      <h2>Mahsulotlarni boshaqarish</h2>
      {!isLoading ? (
        <>
          <div className="manage__product__wrapper">
            {data?.innerData?.slice(0, PAGE_COUNT * count)?.map((item) => (
              <div  className="manage__product-item"  key={item._id}>
                <div style={{opacity: item.valid ? 1 : .3}}>
                  <img src={item.url[0]} alt="" />
                  <h4>{item.name}</h4>
                </div>
                <div className="manage__product-btns">
                  <button
                    disabled={validLoading}
                    className={`toggleValid ${item.valid ? "red" : "blue"}`}
                    onClick={() => toggleValid(item._id, item.valid)}
                  >
                    {validLoading? "Kuting..." : item.valid ? "Sotuvdan olish" : "Sotuvga qo'yish"}
                  </button>
                  <button className="manage__product-delete-btn" disabled={deleteLoading} onClick={()=> deletePro(item._id)}>{deleteLoading ? "Kuting..." : "O'chirish"}</button>
                </div>
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
