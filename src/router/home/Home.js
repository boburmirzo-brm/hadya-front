import React, {useEffect, useState} from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Category from "../../components/Category/Category";
import OurValues from "../../components/OurValues/OurValues";
import axios from "../../api"
import Skeleton from "../../components/skeleton/Skeleton"
import {useGetProductsQuery} from "../../context/productsApi"

function Home() {
  // const [data,setData] = useState([])
  // const [loading,setLoading] = useState(false)
  const {data, isLoading} = useGetProductsQuery()

  // useEffect(()=>{
  //   setLoading(true)
  //   axios.get("/get/products" , {
  //     params: {valid: true}
  //   })
  //     .then(res => setData(res.data.innerData))
  //     .catch(err => console.log(err))
  //     .finally(()=> setLoading(false))
  // }, [])

  return (
    <div>
        <Banner />
        <Category />
        {
          isLoading ? <Skeleton/> : <Products ProductsData={data?.innerData.slice(0, 8)} />
        }
        <OurValues/>
    </div>
  );
}

export default Home;
