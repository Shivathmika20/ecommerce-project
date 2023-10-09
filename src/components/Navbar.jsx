import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
const Navbar = () => {
  return (
    <div className='main'>
        <div className="link bg-black p-5">
            <ul className='text-white flex gap-7 justify-end mx-5 no-underline'>
                <li className='text-xl'>
                    <Link to={"/"}>Shop</Link>
                </li>
                <li>
                    <Link to={"/cart"}>{<ShoppingCart size={30}/>}</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar