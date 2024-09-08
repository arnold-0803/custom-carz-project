import React from 'react';
import SwiperScreen from './SwiperScreen';
import "./SwiperScreenStyles.css";

function ClientsReviews({data}) {

  const breakpoints = {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    780: {
      slidesPerView: 3
    },
    1080: {
      slidesPerView: 4
    }
  }
  return (
    <div className='client-review'>
      <h1>Testimonial Reviews</h1>
      <SwiperScreen
        data={data}
        slidesPerView={4}
        spaceBetween={60}
        navigation={false}
        pagination={true}
        breakpoints={breakpoints}
        customClass="review-swiper"
      />
    </div>
  )
}

export default ClientsReviews;
