import React from 'react'
import "./Notefaund.css"
import not from "../../assets/404.png" 
export default function Notefaund() {
  return (
    <div className='not__faund'>
        <p className='p_Tree'>Ой, кажется я что-то понажимала…</p>
        <img src={not} alt="" />
        <p className='p_One'>Пока я тут разбираюсь с ошибкой, по номеру 78 113 40 40 вам помогут.</p>
        <p className='p_Two'>НА ГЛАВНУЮ</p>
    </div>
  )
}
