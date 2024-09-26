import React from 'react';
import Styles from "./MyCarousel.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper core styles
import 'swiper/css/navigation'; // Import Navigation styles
import { Navigation } from 'swiper/modules';
import Mycard  from '../Mycard/Mycard';


const MyCarousel = ({data}) => {
  
  return (
    <Swiper
      modules={[Navigation]}
      navigation // enables the navigation controls
      spaceBetween={5} // space between slides
      slidesPerView={7} // number of slides visible
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1, // 1 slide on very small screens
          spaceBetween: 10, // adjust space
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2, // 2 slides on small screens
          spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3, // 3 slides on medium screens
          spaceBetween: 15,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4, // 4 slides on tablets
          spaceBetween: 20,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 5, // 5 slides on desktop
          spaceBetween: 30,
        },
        // when window width is >= 1280px
        1280: {
          slidesPerView: 7, // 7 slides on large desktop screens
          spaceBetween: 40,
        },
      }}
    >
    {data.map((item,index) => (
        <SwiperSlide key={index}>
          <Mycard image={item.image} follows={item.follows} songs={item.songs} title={item.title}/>
        </SwiperSlide>
    ))}
    </Swiper>
  );
}

export default MyCarousel;