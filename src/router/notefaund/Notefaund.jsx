import React from 'react'
import "./Notefaund.css"
import {Link} from "react-router-dom"
import not from "../../assets/not__img.png" 
export default function Notefaund() {
  return (
   <div className="container">
     <div className='not__faund'>
        <p className='p_Tree'>Voy manimcha nimadir tushunarsiz...</p>
        <img src={not} alt="" />
        <p className='p_One'>Bu yerda xatolik bilan shug‘ullanayotganimda, ular 78 113 40 40 raqamiga qo‘ng‘iroq qilib, sizga yordam berishadi.</p>
        <Link to={"/"}><p className='p_Two'>Bosh saxifaga</p></Link>
    </div>
   </div>
  )
}
