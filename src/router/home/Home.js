import React from 'react'
import Banner from "../../components/banner/Banner"
import Products from "../../components/products/Products"
import Category from '../../components/Category/Category'

function Home() {
  return (
    <div>
      <Banner/>
      <Category/>
      <Products/>
    </div>
  )
}

export default Home