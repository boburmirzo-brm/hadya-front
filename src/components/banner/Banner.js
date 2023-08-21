import React, { useState, useEffect } from 'react';
import './Banner.css';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Banner() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`slider__container ${animate ? 'animate' : ''}`}>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner__one">
            <div className="banner_text">
              <p>Style Destination</p>
              <h1>Mazzali tortlar</h1>
              <span>
                Bizda mazzali tortlar, piroglar, shirinliklar, va pecheniyalrar
                bor <br /> hamyonbob rarxda
              </span>
              <br />
              <button className="banner__btn">Biz haqimizda</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__two">
            <div className="banner_text">
              <p>Style Destination</p>
              <h1>Tortlar Toplami</h1>
              <span>
                Bizda mazzali tortlar, piroglar, shirinliklar, va pecheniyalrar
                bor <br /> hamyonbob rarxda
              </span>
              <br />
              <button className="banner__btn">Biz haqimizda</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
