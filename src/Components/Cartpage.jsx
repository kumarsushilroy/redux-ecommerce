import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

function Cartpage() {
  const cartinfo = useSelector((state) => state.cart);
  console.log(cartinfo);

  const [state, setstate] = useState(0)

  const incr = ()=>{
    setstate(state+1)
  }

  const decr = ()=>{
    setstate(state-1)
  }

  return (
    <div className="w-full">
      <div className="  p-4 m-2 gap-3 flex-col">
        <h1 className="text-center bg-red-500 text-white p-2 mb-2 font-[poppins]">CART ITEMS </h1>
        { cartinfo.length === 0 ? <div className="flex-col gap-4">  <p className="text-center font-bold text-3xl">Your cart is empty 😟</p> <Link to={'/'}><button className="border bg-blue-400 p-2  rounded text-white hover:opacity-80 mt-10"> ← Continue Shopping</button></Link>  </div>  : cartinfo.map((item, i) => {
          return (
            <div className="flex justify-between shadow-md items-center px-4 py-3 rounded">
              <img className="w-[100px] object-cover" src={item.image} alt="" />

              <div>
                <h1 className="font-bold">Price</h1>
                <h1>{item.price}</h1>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="font-bold">Quantity</h1>
                <div className="flex gap-2 mt-1 items-center">
                    <button onClick={incr} className="border p-2">+</button>
                    <p>{state}</p>
                    <button onClick={decr} className="border p-2">-</button>
                </div>
              </div>

              <div>
                <h1 className="font-bold">Total Amount</h1>
                <p>${state*item.price}</p>
              </div>
              
            </div>
          );
        })}

      <div>
{
    cartinfo.length === 0 ? '' : 
      <Link to={'/'}><button className="border ml-2 bg-blue-400 p-2  rounded text-white hover:opacity-80 mt-10"> ← Continue Shopping</button></Link> 
}
      </div>
      
      </div>
    </div>
  );
}

export default Cartpage;
