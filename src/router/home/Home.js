import React from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Category from "../../components/Category/Category";
import OurValues from "../../components/OurValues/OurValues";
import Skeleton from "../../components/skeleton/Skeleton"
import {useGetProductsQuery} from "../../context/productsApi"
import Notefaund from "../notefaund/Notefaund"
 
function Home() {
  // const [data,setData] = useState([])
  // const [loading,setLoading] = useState(false)
  const {data, isLoading} = useGetProductsQuery({ valid: true })
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
        <h2 className="container category__title text__left">Eng so'ngi qo'shilganlar</h2>
        <br />
        {
          isLoading ? <Skeleton/> : data ? <Products ProductsData={data?.innerData.slice(0, 8)} /> :<Notefaund/>  
        }
          <div className="sort__category-banner">
        <div className="sort__category-dark">
        </div>
      </div>
        <OurValues/>
    </div>
  );
}

export default Home;
