import React from 'react'

import { Facebook, Search, Twitter, Youtube } from 'lucide-react'
const Footnote = () => {
  return (
    <footer className='md:py-24 py-5 bg-black text-white'>
    <div className="container">
      <div className=" flex gap-5 flex-col text-center items-center justify-center  md:grid md:grid-cols-[1fr,_1fr,_2fr,_2fr]">
        <ul className='space-y-5'>
          <li>Privacy Policy</li>
          <li>Terms and Condition</li>
          <li>Cookie Policy</li>
        </ul>
        <ul className='space-y-5'>
          <li>About</li>
          <li>Menu</li>
          <li>Delivery</li>
        </ul>
        <ul className='space-y-5'>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
        <div>
        <ul className='md:flex md:gap-5 mb-5 flex gap-5 flex-row text-center items-center justify-center'>
          <li><Facebook/></li>
          <li><Twitter/></li>
          <li><Youtube/></li>
        </ul>
        <p className='mb-3'>09 203 730158</p>
        <p>10 Ave Rizal Street San Pablo City, Laguna</p>
        </div>
       
      </div>
    </div>
  </footer>
  )
}

export default Footnote
