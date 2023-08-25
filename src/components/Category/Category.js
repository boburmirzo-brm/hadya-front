import React from 'react'
import './Category.css'
import {Link} from 'react-router-dom'
function Category() {
  return (
    <div className='Category container'>
      <h2>Bizda bor Kategoriyalar</h2>
      <div className="all__categories">
        <div className="one">
          <div className="img">
            <Link to={"/"}>
            <button>Koproq</button>
            </Link>
          </div>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, adipisci.</h4>
        </div>

        <div className="one">
          <div className="img">
          <Link to={"/"}>
            <button>Koproq</button>
            </Link>
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, adipisci.</h4>
        </div>

        <div className="one">
          <div className="img">
          <Link to={"/"}>
            <button>Koproq</button>
            </Link>
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, adipisci.</h4>
        </div>

        <div className="one">
          <div className="img">
          <Link to={"/"}>
            <button>Koproq</button>
            </Link>
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Nam, adipisci.</h4>
        </div>
        <div className="one">
          <div className="img">
          <Link to={"/"}>
            <button>Koproq</button>
            </Link>
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Nam, adipisci.</h4>
        </div>
        <div className="one">
          <div className="img">
          <Link to={"/"}>
            <button>Koproq</button>
            </Link>
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Nam, adipisci.</h4>
        </div>
      </div>
      
    </div>
  )
}

export default Category;
