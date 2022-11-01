import React from 'react'
import { Carousel } from 'react-bootstrap'
import Carousel1 from './Carousel1'
import "./Testimonial.css"

const Testimonial = () => {
  return (
    <div className='bgt'>
     <h1 className='text-center text-light bord '>Testimonials</h1>
     <div className='white mb-5'></div>
     <div className='my-5'>
     <Carousel1/>
     </div>
    </div>
  )
}

export default Testimonial
