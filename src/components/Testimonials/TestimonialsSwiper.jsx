import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonials.css';
// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";

const TestimonialsSwiper = ({data}) => {



    return ( 
    <>
    <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        speed= {600}
        loop= {true}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination= {{
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40
            },
      
            1200: {
              slidesPerView: 3,
            }
          }}
        
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => 
          <SwiperSlide key={item.id}>
          <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    {item.testimonial}
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        
      </Swiper>
      
      </>
       );
}
 
export default TestimonialsSwiper;