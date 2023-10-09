import React from 'react'
import {Users} from '../../src/db'
import Product from './Product'
const Shopping = () => {
  return (
    <div className='shop '>
      <div className="tittle  text-3xl font-bold text-center">
        <h1>Pedro Tech Shop</h1>
      </div>
      <div className="products">
        {Users.map((product)=>(
          <Product data={product}/>
        ))}
      </div>
    </div>
  )
}

export default Shopping