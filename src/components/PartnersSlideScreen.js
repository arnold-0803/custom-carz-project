import React from 'react'
import SwiperScreen from './SwiperScreen';

function PartnersSlideScreen({data}) {

  const breakpoints = {
    0:{
        slidesPerView: 2,
    },
    480:{
      slidesPerView: 3
    },
    780:{
      slidesPerView: 4
    },
    1080:{
      slidesPerView: 6
    }
  }

  return (
    <div className="partners-slide-wrapper">
      <h1>Our Partners</h1>
      <SwiperScreen
        data={data}
        slidesPerView={6}
        spaceBetween={30}
        autoplay={{delay:0}}
        loop={true}
        speed={1000}
        breakpoints={breakpoints}
        customClass="about-swiper"
      />
    </div>
  )
}

export default PartnersSlideScreen;
