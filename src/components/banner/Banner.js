import React from 'react';
import './Banner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import img1 from "../../assets/banner006.jpg" 
import img2 from "../../assets/banner008.jpg" 
import img3 from "../../assets/banner007.jpg" 
import img4 from "../../assets/banner005.jpg" 

function Banner() {
  return (
    <div className={`slider__container `}>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="banner__swiper"
      >
        <SwiperSlide className="banner__item">
            <img src={img1} alt="" />
       
        </SwiperSlide>
        <SwiperSlide className="banner__item">
            <img src={img2} alt="" />
            {/* <div className="banner_text container">
              <h1>Tortlar</h1>
              <Link to={"/about"}>
                <button className="banner__btn">Biz haqimizda</button>
              </Link>
            </div> */}
        </SwiperSlide>
        <SwiperSlide className="banner__item">
          <img src={img3} alt="" />
            {/* <div className="banner_text container">
              <h1>Tortlar Toplami</h1>
              <Link to={"/about"}>
                <button className="banner__btn">Biz haqimizda</button>
              </Link>
            </div> */}
        </SwiperSlide>
        <SwiperSlide className="banner__item">
          <img src={img4} alt="" />

            {/* <div className="banner_text container">
              <h1>Cheese Cake</h1>
              <Link to={"/about"}>
                <button className="banner__btn">Biz haqimizda</button>
              </Link>
            </div> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
