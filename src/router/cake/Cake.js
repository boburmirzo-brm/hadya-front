import React from 'react'
import { cake } from '../../static'

function Cake() {
  return (
    <div className='product-second container'>
        {
            cake?.map((item)=> 
            <div className="product-card">
                <img src={item.url} alt="" />
                <h2>{item.title}</h2>
                <h4>{item.price} so'm</h4>
                <button>Sotib olish</button>
            </div>
            )
        }
    </div>
  )
}

export default Cake