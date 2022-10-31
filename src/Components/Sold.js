import React from 'react'
import "./sold.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Sold = () => {
  return (
    <>
    <div className='bgso'>
   <div className='h1 text-center text-light'>Domain's We sold</div>
   <div className='white'></div>
   
 <Swiper
        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"

        breakpoints={{
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 2,
    },
  }}
      >

 <div className="row mx-5"></div>
    <SwiperSlide>
    
      <div className=' col-4 ef'>
         <h1 className='text-center '>Opinion.com</h1>
       </div>
     
</SwiperSlide>

<SwiperSlide>
    
      <div className='col-4 ef'>
         <h1 className='text-center '>Rash.com</h1>
       </div>
     
</SwiperSlide>
<SwiperSlide>
    
    <div className='col-4 ef'>
       <h1 className='text-center '>Nui.com</h1>
     </div>
   
</SwiperSlide>
<SwiperSlide>
    
    <div className='col-4 ef'>
       <h1 className='text-center '>Christy.com</h1>
     </div>
   
</SwiperSlide>
<SwiperSlide>
    
    <div className='col-4 ef'>
       <h1 className='text-center '>Opinion.com</h1>
     </div>
   
</SwiperSlide>
<SwiperSlide>
    
    <div className='col-4 ef'>
       <h1 className='text-center '>Opinion.com</h1>
     </div>
   
</SwiperSlide>
<SwiperSlide>
    
    <div className='col-4 ef'>
       <h1 className='text-center '>Opinion.com</h1>
     </div>
   
</SwiperSlide>
v


 

   
  </Swiper>
  </div>


    </>

  )
}

export default Sold
