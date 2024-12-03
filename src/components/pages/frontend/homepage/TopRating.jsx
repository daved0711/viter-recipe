import { imgPath } from '@/components/helpers/functions-general'
import React from 'react'
import { Link } from 'react-router-dom'

const TopRating = () => {
  return (
    <div>
       <section className='py-24 bg-dark '>
    <div className="container">
        <h2 className='text-white'>Top Rated Recipes</h2>

        <div className="grid grid-container-top gap-3">
        {Array.from(Array(6).keys()).map((key) => ( 
             <div className={` object-cover grid-item relative h-full w-full bg-black group grid-name-top-${key} overflow-hidden`} key={key}>
                <img src={`${imgPath}/adobo2.jpg`} alt="" className='group-hover:opacity-70
                 transition-all w-full h-full object-cover group-hover:scale-[1.5] group-hover:rotate-[10deg]' />
                <div className='absolute -bottom-24 left-5 text-white opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all'>
                     
                         <ul className='text-sm flex gap-4 items-center'>
                            <li>30mins</li>
                            <li>4 servings</li>
                         </ul>
                         <h4 className='mb-2 font-light'>Adobong Ipis</h4>
                         <Link to="/" className='font-bold'>View Recipe</Link>
                </div>
            </div>))}
          
        </div>

    </div>
    </section>
    </div>
  )
}

export default TopRating
