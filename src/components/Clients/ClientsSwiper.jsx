import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper";

const ClientsSwiper = ({data}) => {
    
  
  return ( 
    
    <Swiper
        speed= {400}
        loop= {true}
        spaceBetween={100}
        slidesPerView={6}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 110
            }
          }}
          modules={[Autoplay]}
        
        onSwiper={(swiper) => console.log(swiper)}
      >
        
        
        <div className="clients-slider swiper">
        <div className="swiper-wrapper align-items-center">
          {data.map((item) =>
          <SwiperSlide key={item.img}>
            <div className="swiper-slide"><img src={item.img} className="img-fluid" alt="" /></div>
          </SwiperSlide>
          )}
        </div>
        </div>
        
      </Swiper>
      
       );
}
 
export default ClientsSwiper;