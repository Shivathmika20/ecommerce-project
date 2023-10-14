import React from 'react'
import {store} from '../context/ShopContext'
import { useContext } from 'react'


const Product = (props) => {
    const{id,productName,price,image}=props.data;

   const [Items, addCart]=useContext(store);
   const ItemAmount=Items[id];
  return (
    
    <div className='details flex flex-col justify-center items-center rounded-2xl w-96 h-96 m-24'>
      <img src={image} className='pic w-96 hover:cursor-pointer hover:-translate-y-4 ease-in-out duration-200'/>
      <div className="info text-center mt-2 ">
        <b>{productName}</b>
        <p>Rs.{price}</p>
       
      </div>
      <button className='btn px-5 py-2 flex mt-2 rounded-3xl  border-2 border-black text-black font-semibold hover:cursor-pointer hover:bg-black hover:text-white'
       onClick={()=>{addCart(id)}} >Add To Cart {ItemAmount>0 && <p>({ItemAmount})</p>} {
        
       } </button>
        
    </div>
    
  )
}

export default Product