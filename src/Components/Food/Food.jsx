import React from 'react'

export const Food = ({ src,alt,foodName, price }) => {
  return (
    <div className="Food">
        <img
            src={ src }
            alt={ alt }
        />
        <div className="Description">
            <h2>{ foodName }</h2>
            <h2 className='Price'>{price}</h2>
        </div>
    </div>
  )
}
