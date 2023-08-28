import React from 'react'
import './Category.css'
import { category } from '../../static';
import { Link } from 'react-router-dom'
function Category() {
  return (
    <div className='Category container'>
      <h2>Bizda bor Kategoriyalar</h2>
      <div className="card__wrapper">

        {
          category?.map((item) =>
            <div key={item.id} className="category__card">
              <img src={item.url} alt="" />
              <Link to={`${item.link}`}>
                <h4>{item.title}</h4>
              </Link>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Category;
