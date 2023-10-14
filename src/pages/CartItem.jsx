import React from 'react'
import {store} from '../context/ShopContext'
import { useContext } from 'react'


const CartItem = (props) => {
    const{id,productName,price,image}=props.data;
    const [Items,addCart,delCart,updateCart]=useContext(store);

  return (
    <div className='container flex justify-start items-center w-1/3 rounded-2xl h-1/3 m-auto  mb-4 p-4 bg-slate-100  shadow-md shadow-black'>
         <img src={image} className='pic w-32 hover:cursor-pointer'/>
        <div className="info  mt-2 ml-2">
          <b>{productName}</b>
          <p>Rs.{price}</p>
          <div className='count mt-4'>
                  <button onClick={()=>delCart(id)} className='b bg-gray-500 px-2 text-white'>-</button>
                  <input value={Items[id]} onChange={(e)=>{updateCart(Number(e.target.value),id)}} className='in w-1/6 text-center'/>
                  <button onClick={()=>{addCart(id)}} className='b bg-gray-500 px-2 text-white'>+</button>
          </div>
      </div>
    </div>
  )
}

export default CartItem