import React from 'react'
import { sweet } from '../../static'


function Sweet() {
    return (
        <div className='product-second container'>
            {
                sweet?.map((item) =>
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

export default Sweet