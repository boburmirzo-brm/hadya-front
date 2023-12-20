import React, { useEffect } from 'react'
import "./Notefaund.css"
import {Link} from "react-router-dom"
import not from "../../assets/not__img.png" 
export default function Notefaund() {
  useEffect(()=>{window.scroll(0, 0)}, [])

  return (
   <div className="container">
     <div className='not__faund'>
        <p className='p_Tree'>Kechirasiz, nimadir xato...</p>
        <img src={not} alt="" />
        <p className='p_One'>Bunday sahifa topilmadi!</p>
        <Link to={"/"}><button className='not__found-btn'>Bosh saxifaga</button></Link>
    </div>
   </div>
  )
}
