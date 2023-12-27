import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import img1 from "../../assets/banner006.jpg";
import img2 from "../../assets/banner008.jpg";
import img3 from "../../assets/banner007.jpg";
import img4 from "../../assets/banner005.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className={`slider__container `}>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="banner__swiper"
      >
        <SwiperSlide className="banner__item">
          <img src={img1} alt="" />
          <div className="banner__dark"></div>
          <div className="banner__text container">
            <h1>Lorem, ipsum dolor.</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit sapiente
            </p>
            <Link to={"/about"}>
              <button>Biz haqimizda</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner__item">
          <img src={img2} alt="" />
          <div className="banner__dark"></div>
          <div className="banner__text container">
            <h1>Hello world</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit sapiente
            </p>
            <Link to={"/branches"}>
              <button>Filiallarimiz</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner__item">
          <img src={img3} alt="" />
          <div className="banner__dark"></div>
          <div className="banner__text container">
            <h1>Salom dunyo</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit sapiente
            </p>
            <Link to={"/about"}>
              <button>Biz haqimizda</button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
