import React from 'react'
import './Category.css'
import {FaCakeCandles} from 'react-icons/fa6'
import {GiCakeSlice} from 'react-icons/gi'
import {GiCupcake} from 'react-icons/gi'
import {PiCookieDuotone} from 'react-icons/pi'
function Category() {
  return (
    <div className='Category container'>
        <h2>Bizda bor Kategoriyalar</h2>
        <div className="all_categories">
            <div className="one">
                <h3>Tortlar</h3>
                <FaCakeCandles/>
            </div>
            <div className="two">
                <h3>Pirojnetlar</h3>
                <GiCakeSlice/>
            </div>
            <div className="three">
                <h3>Biskuitlar</h3>
                <GiCupcake/>
            </div>
            <div className="four">
                <h3>Pechenyalar</h3>
                <PiCookieDuotone/>
            </div>
        </div>
    </div>
  )
}

export default Category