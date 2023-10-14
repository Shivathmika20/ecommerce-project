import {Users} from '../../src/db'
import React from 'react'
import {store} from '../context/ShopContext'
import { useContext } from 'react'
import CartItem from '../pages/CartItem'
import { Navigate, useNavigate } from 'react-router-dom'


const Cart = () => {
  const [Items]=useContext(store);
  const navigate=useNavigate();
  
  const cartItems = Users.filter(product => Items[product.id] !== 0);

  return (
    <div className='cart'>
        <div className='tittle1  text-4xl font-bold text-center my-4'><h1>Your Cart Items</h1></div>
        <div className='cartInfo'>
              {Users.map((product)=>{
                  if(Items[product.id]!==0)
                  {
                    return <CartItem data={product}/>
                  }
              })}
        </div>

        {cartItems.length === 0 ? 
        (
          <div className='foot flex flex-col justify-center items-center'>
            <p className='em text-2xl m-7'><b>Your cart is empty</b></p>
              <button onClick={() => navigate('/')} className='border-2 border-black p-3 bg-black text-white'>
                Continue Shopping
              </button>
          </div>
          ) : (
          <div className='foot flex flex-col justify-center items-center'>
            <div className="btns text-xl flex gap-6 p-3 ">
            <button onClick={()=>navigate("/")} className='border-2 border-black p-3 bg-black text-white'>Continue Shopping</button>
            <button  className='border-2 border-black p-3 bg-black text-white'>Check out</button>
            </div>
            
          </div>
        )}
        
    </div>
  )
}

export default Cart