 import React from 'react'
 import './OurValues.css'
import {LuFlower2} from 'react-icons/lu'
import {MdOutlineFamilyRestroom} from 'react-icons/md'
import {FaPrayingHands} from 'react-icons/fa'
 function OurValues() {
   return (
     <div className='our__values'>
        <h2>BIZNING QADIRLARIMIZ</h2>
        <div className="inner__values">
        <div className="value">
            <LuFlower2/>
            <h3>Atrof muhit</h3>
            <p>Hadya kelajak haqida qayg'uradi</p>
        </div>
        <div className="value">
            <MdOutlineFamilyRestroom/>
            <h3>Oila</h3>
            <p>Oilaviy qadriyatlarni asrab, odamlar hayotini <br /> bayramga aylantiramiz</p>
        </div>
        <div className="value">
            <FaPrayingHands/>
            <h3>Inklyuziya</h3>
            <p>Hamma uchun teng imkoniyatlar</p>
        </div>
        </div>
     </div>
   )
 }
 
 export default OurValues