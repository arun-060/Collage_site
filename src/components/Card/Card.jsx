import React from 'react'
import './Card.css'

function Card({image, title}) {
  return (
    <div className='card'>
        <img src={image} alt={title} className='card-image' />
        <div className="card-content">
            <div className="card-title">
                <h3 className="card-title">
                    {title}
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Card