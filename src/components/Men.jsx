import React from 'react'
import AdiclubSlider from './AdiclubSlider'
import Product from './Product'

const Men = ({addToCart}) => {
  return (
    <div>
      <AdiclubSlider/>
      <Product addToCart={addToCart} />
    </div>
  )
}

export default Men