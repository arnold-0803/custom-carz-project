import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./SwiperScreenStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import React from 'react'

const SwiperScreen = ({
  data,
  spaceBetween=30,
  slidesPerView=1, 
  navigation, 
  pagination, 
  loop, 
  autoplay,
  breakpoints={},
  customClass
}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination ? {clickable: true} : false}
      loop={loop}
      autoplay={autoplay}
      breakpoints={breakpoints}
      modules={[Navigation, Pagination, Autoplay]}
      className={customClass}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className='swiper-slide'>
          <div className="left top">
            <h2>{item.heading}</h2>
            <h3>{item.subheading}</h3>
            <p>{item.para}</p>
          </div>
          <div className="right bottom">
            <img src={item.image} alt="" />
            <b>{item.name}</b>
            <p>{item.words}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperScreen;


