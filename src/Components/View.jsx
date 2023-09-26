import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

export default function View() {

 const params = useParams();

 const paramsId = params.id;

 const [data , setdata] = useState()
 
 useEffect(()=>{
    const getData = async ()=>{
        const result = await fetch(`https://api.pujakaitem.com/api/products/${paramsId}`);
        const res = await result.json();
        setdata(res);
        console.log(data);
    }
    getData();
 },[])

  return (
    <div className='w-full'>
       <div className=' mx-auto flex gap-3 w-[400px]'>

<div>
    
</div>

           <div className='p-3 flex flex-col gap-2'>
           <p className='text-xl'> <span className='font-bold'>Category</span>: {data.category}</p>
           <p className='text-xl'> <span className='font-bold'>Name</span>: {data.name}</p>
           <p className='text-xl'> <span className='font-bold'>Company</span>: {data.company}</p>
           <p className='text-xl'> <span className='font-bold'>Price</span>: {data.price}</p>
           <p className='text-justify'> <span className='font-bold'>Description</span>: {data.description}</p>
            
           </div>
       </div>
    </div>
  )
}
