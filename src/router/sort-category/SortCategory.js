import React, { useEffect, useState } from "react";
import axios from "../../api";
import { useParams } from "react-router-dom";
import Products from "../../components/products/Products";
import Skeleton from "../../components/skeleton/Skeleton";
import "./SortCategory.css";
import image from "../../assets/not__img.png";
import { useGetProductsQuery } from "../../context/productsApi"
import { category } from "../../static"

const PAGE_COUNT = 8

function SortCategory() {
  const { category: categoryType } = useParams();
  // const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  // const [loading, setLoading] = useState(false);
  const { data, isLoading } = useGetProductsQuery(categoryType === "all" ? { valid: true } : { category:categoryType, valid: true })
  console.log(data);
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`/get/products`, {
  //       params:
  //         category === "all" ? { valid: true } : { category, valid: true },
  //     })
  //     .then((res) => setData(res.data.innerData))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="sort__category">
      <div className="sort__category-banner">
        <div className="sort__category-dark">
          <h1>{category?.find(el=> el.link===categoryType)?.title}</h1>
        </div>
      </div>
      {isLoading ? (
        <Skeleton />
      ) : data?.innerData?.length ? (
        <Products ProductsData={data?.innerData?.slice(0, PAGE_COUNT * count)} />
      ) : (
        <div className="sort__category-not">
          <img src={image} alt="" />
          <h3>Mahsulot topilmadi</h3>
        </div>
      )}
      {
        data?.innerData?.length / PAGE_COUNT > count ?
        <button className="sort__category-btn" onClick={()=> setCount(p=> p+1)}>Ko'proq ko'rish</button>
        : <></>
      }
    </div>
  );
}

export default SortCategory;