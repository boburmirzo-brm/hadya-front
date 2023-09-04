import React, {useEffect, useState} from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Category from "../../components/Category/Category";
import OurValues from "../../components/OurValues/OurValues";
import axios from "../../api"
import Skeleton from "../../components/skeleton/Skeleton"

function Home() {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    axios.get("/get/products")
      .then(res => setData(res.data.innerData))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
  }, [])

  return (
    <div>
        <Banner />
        <Category />
        {
          loading ? <Skeleton/> : <Products ProductsData={data.slice(0, 8)} />
        }
        <OurValues/>
    </div>
  );
}

export default Home;
