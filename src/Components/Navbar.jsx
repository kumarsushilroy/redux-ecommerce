import React from 'react';
import { Link } from 'react-router-dom';
import {  useSelector } from "react-redux/es/hooks/useSelector";
import {FaShopify} from 'react-icons/fa';
import {BsFillCartFill} from 'react-icons/bs'

function Navbar() {

    const cartData = useSelector((state)=>state.cart);


  return (
    <div>
        <div className='flex items-center justify-center md:justify-between p-2 bg-blue-500 text-white m-2 px-3'>
           <Link to={'/'}> <h1 className='sm:text-xl flex items-center'><FaShopify/><span className='text-sm'>hopping</span></h1></Link>

            <ul className='flex items-center '>
               <Link to={'/'} className='p-3'><li>Home</li></Link> 
               <Link to={'/about'} className='p-3'><li>About</li></Link> 
               <Link className='p-3 relative'><li ><BsFillCartFill size={20} /> <span className='absolute text-center top-0 left-5  text-black bg-yellow-400  h-5 w-5 rounded-full'>{cartData.length}</span></li></Link> 
               <Link to={'/cartitempage'} className='p-3'><li className='border sm:px-2 py-1 px-1 rounded cursor-pointer hover:opacity-80 ml-2 text-sm '>Cart Items</li></Link> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar