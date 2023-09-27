import React from 'react';
import { ProductUseContext } from '../ProdContext/Prodcontex';
import Product from './Product';
import Category from './Category';


function Home() {

  const {featureData,state} = ProductUseContext();
  

  
  return (
    <div className='w-full'>
      <div className='mt-5'>
        <Category/>
        <p className='text-red-600'>hello</p>
        <p className='text-green-500'>kya hai be</p>
      </div>
    </div>
  )
}

export default Home;