import React from 'react'
import { useState,createContext } from 'react'
import {Users} from '../../src/db'

export const store=createContext();

const getCart=()=>{
    let cart={};
    for(let i=1;i<=Users.length;i++)
    {
         cart[i]=0;
    }
    return cart;
};



const ShopContext = (props) => {
    const [Items,setItems]=useState(getCart());


    const addCart=(itemId)=>{
        setItems((d)=>({...d,[itemId]:d[itemId]+1}))
    };
    
    const delCart=(itemId)=>{
        setItems((d)=>({...d,[itemId]:d[itemId]-1}))
    };
     
    const updateCart=(newValue,itemId)=>{
        setItems((d)=>({...d,[itemId]:newValue}))
    };

    const contextValue=[Items,addCart,delCart,updateCart];

  return (
    <store.Provider value={contextValue}>
        {props.children}
    </store.Provider>
  )
}

export default ShopContext