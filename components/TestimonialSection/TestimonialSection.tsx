import React from 'react';
import classes from './TestimonialSection.module.css'
import SectionHook from '../UI/SectionHook/SectionHook';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, EffectCoverflow } from "swiper";
import TestimonialCard from '../UI/TestimonialCard/TestimonialCard';

// eslint-disable-next-line
import "swiper/css/bundle";
import 'swiper/css';
import "swiper/css/effect-coverflow";
import testimonials from './TestimonialAssets';

const TestimonialSection = () => {
    return (
      <section className={classes.testimonial__section}>
        <main className={classes.testimonial__hook__container}>
          <h1 className={classes.testimonial__hook__line}>
            What our Client say about us?
          </h1>
          <p className={classes.testimonial__subhook}>
            Look at a glance how our system works
          </p>
        </main>
        <div className={classes.testimonial__container}>
          <Swiper
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
            className="mySwiper"
          >
           
            {
               testimonials.map((testi, index) => {
                    return (
                      <SwiperSlide
                        style={{
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          width: "350px",
                          margin: "0",
                        }}
                      >
                        <TestimonialCard
                          key={index}
                          testimonial={testi.testimonial}
                          ownerName={testi.ownerName}
                          ownerPosition={testi.ownerPosition}
                        />
                      </SwiperSlide>
                    );
                })
             
            }
            
          </Swiper>
        </div>
      </section>
    );
};

export default TestimonialSection;
