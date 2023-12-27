import React from 'react'
import './Loading.css'

function Loading() {
  return (
    <div className='loading__container'>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading