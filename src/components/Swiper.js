import img1 from "../pix/c80de96d-26ee-47f0-861c-ce9319001919-removebg-preview.png";
import img2 from "../pix/HOSPITAL_ABANDONADO-removebg-preview.png";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./SwiperStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperFuntion(props){
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2200,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="swiper-box">
        <div className="content">
          <h3>{props.subHeading}</h3>
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image">
          <img src={img1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-box">
        <div className="content">
          <h3>{props.subHeading}</h3>
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image">
          <img src={img2} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
