import React from 'react';
import { UseFilterContext } from '../FilterContext/Filtercontex';

function Product({items, key}) {

  const {filtered_Data} = UseFilterContext();
  
  return (
    <div className='border' >
       <div>
        <img src={items.image} alt="" />
         <p>${items.price}</p>
       </div>
    </div>
  )
}

export default Product