import React, { useEffect, useState } from "react";
import axios from "../../api";
import { useParams } from "react-router-dom";
import Products from "../../components/products/Products";
import Skeleton from "../../components/skeleton/Skeleton";
import "./SortCategory.css";
import image from "../../assets/not__img.png";

function SortCategory() {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/get/products`, {
        params: category === "all" ? null : { category },
      })
      .then((res) => setData(res.data.innerData))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return loading ? (
    <Skeleton />
  ) : (
    <div className="sort__category">
      {data.length ? (
        <Products ProductsData={data} />
      ) : (
        <div className="sort__category-not">
          <img src={image} alt="" />
          <h3>Mahsulot topilmadi</h3>
        </div>
      )}
    </div>
  );
}

export default SortCategory;
