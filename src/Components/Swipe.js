import React from 'react'
import "./Feature.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Swipe = () => {
  return (
    <div className="container-fluid bgf">
    <Swiper
        pagination={{
          type: "fraction",
        }}
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
 <div className="">
    <SwiperSlide>
    <div className='px-5 fca text-center'>
        <h3>TLF.com</h3>
        <div className="text-center  mt-5 px-4 py-3  h6 rounded-full contactf ">INQUIRE NOW</div>

        </div>
</SwiperSlide>
 <SwiperSlide>
    <div className='px-5 fca text-center'>
        <h3 className='text-center'>TLF.com</h3>
        <div className="text-center  mt-5 px-4 py-3  h6 rounded-full contactf ">IsNQUIRE NOW</div>

        </div>
</SwiperSlide>
 <SwiperSlide>
    <div className='px-5 fca text-center'>
        <h3>RASH.com</h3>
        <div className="text-center  mt-5 px-4 py-3  h6 rounded-full contactf ">INQUIRE NOW</div>

        </div>
</SwiperSlide>
 <SwiperSlide>
    <div className='px-5 fca text-center'>
        <h3>TLF.com</h3>
        <div className="text-center  mt-5 px-4 py-3  h6 rounded-full contactf ">INQUIRE NOW</div>

        </div>
</SwiperSlide>
 <SwiperSlide>
    <div className='px-5 fca text-center'>
        <h3>TLF.com</h3>
        <div className="text-center  mt-5 px-4 py-3  h6 rounded-full contactf ">INQUIRE NOW</div>

        </div>
</SwiperSlide>
 <SwiperSlide>
    <div className='px-5 fca text-center'>
        <h3>TLF.com</h3>
        <div className="text-center  mt-5 px-4 py-3  h6 rounded-full contactf ">INQUIRE NOW</div>

        </div>
</SwiperSlide>
   </div>
  </Swiper>
  
  </div>
  )
}

export default Swipe
