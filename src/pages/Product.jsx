import React from 'react'

const Product = (props) => {
    const{id,productName,price,Image }=props.data
  return (
    
    <div className='details '>
      {/* <img src="{Image}" /> */}
     
      <div className='img p-20 w-1/6 bg-blue-500'>
    
      </div>
      <div className="info">
        <b>{productName}</b>
       
        <p>{price}</p>
      
      </div>
    </div>
    
  )
}

export default Product