import React from 'react'

function About() {
  return (
    <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2'>

           <div className='m-2'>
            <img className='w-full' src="https://media.istockphoto.com/id/506799337/photo/multiethnic-group-of-people-and-about-us-concept.webp?b=1&s=170667a&w=0&k=20&c=j2D-BjEdtv0VcnHceLg_Kivg7mOxvUJGzXVJpdGIcB0=" alt="" />
           </div>

           <div className='m-2 p-2 '>
               <h1 className='font-bold text-2xl'>ABOUT US</h1>
               <h1 className='py-3 font-bold'>Our Client Review</h1>

               <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel voluptatum vero ducimus placeat facilis sit minima corporis quasi dolorem! Hic provident nobis officiis aliquam adipisci facere repellendus, veniam saepe cupiditate accusantium unde eos fugiat porro nam impedit. Autem eveniet illum quia porro similique deleniti nam dolor quae eaque dolorem,  .</p>
           </div>

        </div>
    </div>
  )
}

export default About