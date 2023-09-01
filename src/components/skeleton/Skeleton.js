import React from 'react'
import "./Skeleton.css"

export default function Skeleton() {
  return (
    <div className='container skeleton'>
        {
            new Array(8).fill("").map((_, inx)=> <div key={inx} className='skeleton__item'>
            <div className="skeleton__image anime"></div>
            <div className="skeleton__line anime"></div>
            <div className="skeleton__line anime"></div>
        </div>)
        }
    </div>
  )
}
