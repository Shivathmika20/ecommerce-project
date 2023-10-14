import React from 'react'
import {Users} from '../../src/db'
import Product from './Product'

const Shopping = () => {
  return (
    <div className='shop '>
      <div className="tittle  text-4xl font-bold text-center my-4">
        <h1>Pedro Tech Shop</h1>
      </div>
      <div className="products grid grid-cols-3 place-items-center w-full  ">
        {Users.map((product)=>(
          <Product data={product}/>
        ))}
      </div>
    </div>
  )
}

export default Shopping