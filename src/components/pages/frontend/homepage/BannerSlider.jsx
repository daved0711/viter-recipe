import { imgPath } from '@/components/helpers/functions-general'
import { ArrowRight, ChartBarStacked, Clock, HandPlatter, Settings, Utensils } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const BannerSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <section >
      <Slider {...Settings}>

        {Array.from(Array(5).keys()).map((key) => ( <div className='w-full h-[calc(100vh-98px)] relative'>
        <img src={`${imgPath}/adobo2.jpg`} alt="" className='w-full h-[110%] object-cover' />
        <div className="tint w-full h-[110%] bg-black bg-opacity-90 absolute top-0 left-0">
        </div>
        <div className='absolute top-1/2 md:left-[calc((100vw-1200px)/2)] 
        p-4 text-white md:max-w-[500px] max-w-[500px]  -translate-y-1/2'>
       <h2 className='md:text-5xl'>Adobong Tipaklong</h2>
       <ul className='md:flex md:gap-5 md:mb-5  gap-5 mb-5 '>
        <li className=' flex gap-2 items-center'><Utensils /> 4 Servings</li>
        <li className=' flex gap-2 items-center'><HandPlatter/> Adobo</li>
        <li className=' flex gap-2 items-center'><Clock/>30mins</li>
       </ul>
       <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione ipsum provident quia eos sed accusantium deleniti,
         dolore mollitia fuga rem totam itaque dignissimos quisquam consequuntur laborum quas eveniet iure?</p>
         <Link to="/" className='flex gap-3 group items-center hover:text-accent transition-all font-bold'>View Full Recipe
          <ArrowRight size={18} className='opacity-0 -translate-x-3 transition-all group-hover:opacity-100
         group-hover:translate-x-0 stroke-accent' /></Link>
        </div>
       
      </div>))}
     
      </Slider>
    </section>
  )
}

export default BannerSlider
