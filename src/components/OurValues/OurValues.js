 import React from 'react'
 import './OurValues.css'
import {MdBakeryDining} from 'react-icons/md'
import {MdOutlineFamilyRestroom} from 'react-icons/md'
import {FaPrayingHands} from 'react-icons/fa'
 function OurValues() {
   return (
    <div className='container'>
       <div className='our__values'>
        <h2 className='category__title'>BIZNING QADRIYATLARIMIZ</h2>
        <div className="inner__values">
        <div className="value">
            <MdBakeryDining/>
            <h3>Halol mahsulotlar</h3>
            <p>Hadya kelajak haqida qayg'uradi</p>
        </div>
        <div className="value">
            <MdOutlineFamilyRestroom/>
            <h3>Soflik va Pokizalik</h3>
            <p>O'z qadriyatlarimizni asrab, odamlar hayotini <br /> bayramga aylantiramiz</p>
        </div>
        <div className="value">
            <FaPrayingHands/>
            <h3>Jamoaviy Muhit</h3>
            <p>Hamma uchun teng imkoniyatlar</p>
        </div>
        </div>
     </div> 
    </div>

   )
 }
 
 export default OurValues