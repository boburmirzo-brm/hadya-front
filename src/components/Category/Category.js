import React from 'react'
import './Category.css'

import { category } from '../../static';
import { Link } from 'react-router-dom'
function Category() {
  return (
    <div className='Category container'>
      <h2 className='category__title text__left'>Kategoriyalar</h2>
      <div className="card__wrapper">
        {
          category?.map((item) =>
            <Link to={`/products/${item.link}`} key={item.id} className="category__card">
              <img src={item.url} alt="" />
              <p>{item.title}</p>
            </Link>
          )
        }
      </div>

    </div>
  )
}

export default Category;
