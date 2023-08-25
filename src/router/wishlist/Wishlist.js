import React from 'react'
import "./Wishlist.css"
import Products from '../../components/products/Products'
import Empty from '../../components/empty/Empty'
// import { useSelector } from 'react-redux';

function Wishlist() {
    const heart =  []
  console.log(heart);

  return (
    <div className='wishlist'>
      <h2>Sevimlilar</h2>
      {heart.length ? (
        <Products />
      ) : (
        <Empty title="Sevimlilar"  data={heart} />
      )}
    </div>
  )
}

export default Wishlist