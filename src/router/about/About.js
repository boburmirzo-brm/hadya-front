import React, { useEffect } from "react";
import "./About.css";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import about1 from "../../assets/about_1.jpg";
import about2 from "../../assets/about_2.jpg";
import about3 from "../../assets/about_3.jpg";
import about4 from "../../assets/about/bg2.jpg";
import about5 from "../../assets/about/bg3.jpg";
import about6 from "../../assets/about/bg4.jpg";
import about7 from "../../assets/about/bg5.jpg";
import about8 from "../../assets/about/bg6.jpg";

function About() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="main__aboutus__text">
        <div className="container">
          <h2>Biz haqimizda</h2>
        </div>
        <div className="back__color"></div>
      </div>

      <div className="container about__our__approach">
        <h1>Bizning yondashuv</h1>
        <p></p>
        <h3>
          Baked goods have been around for thousands of years. The art of baking
          was developed early during the Roman Empire. It was a highly famous
          art as Roman citizens loved baked goods and demanded for them
          frequently for important occasions such as feasts and weddings etc.
          Due to the fame and desire that the art of baking received, around 300
          BC, baking was introduced as an occupation and respectable profession
          for Romans.
        </h3>

        <div className="approach__images">
          <img src={about5} alt="" />
          <img src={about3} alt="" />
          <img src={about4} alt="" />
          <img src={about6} alt="" />
          <img src={about7} alt="" />
          <img src={about8} alt="" />
        </div>
      </div>
{/* 
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co/SN8HcTx/2.jpg")`,
          backgroundRepeat: "no-repeat",
        }}
        className="about__real__taste"
      >
        <h2>Haqiqiy Tam</h2>
        <h3>
          Mehir va muhabbat bilan tayyorlangan shirinlikni har bir bo'lakda his
          qiling
        </h3>
      </div> */}

      <div className="container about__our__mission">
        <div className="mission__text">
          <h2>Bizning maqsad</h2>
        </div>

        <div className="about__our__mission_second__text">
          <div className="mission__first__text">
            <h1>
              Bizning maqsad insonlarga shirinlilar bilan lazzatli onlar
              ulashish. Har bir bo'lak sizga hayotingizdagi eng lazzatli onlarni
              baxshida etadi. Biz bilan hayotingizning yorqin davrlariga
              erishing
            </h1>
          </div>

          <div className="mission__second__text">
            <h1>
              Pishiriqlar ming yillar davomida mavjud. Non pishirish san'ati Rim
              davrida erta rivojlangan <br />
              Imperiya. Bu juda mashhur san'at edi, chunki Rim fuqarolari
              pishiriqlarni yaxshi ko'rishgan va talab qilishgan <br />
              ularni tez-tez ziyofatlar va to'ylar va hokazo kabi muhim
              tadbirlar uchun. Non pishirish san'ati olgan shon-shuhrat va
              xohish tufayli, <br />
              miloddan avvalgi 300-yillarda non pishirish rimliklar uchun kasb
              va hurmatli kasb sifatida joriy qilingan.
            </h1>
          </div>

          {/* <div className="mission__category">
        <p>Custom cakes</p>
        <p>Birthday cakes</p>
        <p>Wedding cakes</p>
        <p>European cakes</p>
      </div> */}
        </div>
      </div>

      {/* <div className="about__swiper">
    <h1>Mijozlar nima deydi</h1>

    <Swiper className="mySwiper">
        <SwiperSlide>
       <div className="swiper__content">
       <img src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/client-1.png" alt="" />

      <div className="swiper__chiziq"></div>

      <div className="swiper__texts">
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> itaque! Repudiandae culpa quasi suscipit perspiciatis <br /> libero est doloribus reiciendis nihil.</h2>
        <h3>-- Robert Joe</h3>
      </div>
       </div>
        </SwiperSlide>


        <SwiperSlide>
       <div className="swiper__content">
       <img src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/client-2.png" alt="" />

      <div className="swiper__chiziq"></div>

      <div className="swiper__texts">
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Itaque! Repudiandae culpa quasi suscipit perspiciatis <br /> libero est doloribus reiciendis nihil.</h2>
        <h3>-- Sara Joe</h3>
      </div>
       </div>
        </SwiperSlide>


        <SwiperSlide>
       <div className="swiper__content">
       <img src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/client-1.png" alt="" />

      <div className="swiper__chiziq"></div>

      <div className="swiper__texts">
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> itaque! Repudiandae culpa quasi suscipit perspiciatis <br /> libero est doloribus reiciendis nihil.</h2>
        <h3>-- Robert Joe</h3>
      </div>
       </div>
        </SwiperSlide>
        
      </Swiper>


    </div> */}

      {/* <div className="our__chefs">
        <div className="our__chefs__text">
          <h1>Bizning oshpazlar</h1>
          <p>
            Jamoamizda ajoyib oshpazlar bor. Shuningdek, biz har doim jamoamizga
            qo'shilish uchun yangi odamlarni qidiramiz. <br /> Bizning
            oshpazlarimiz o'z ishini juda yaxshi bilishadi yaxshi.{" "}
          </p>
        </div>

        <div className="our__chefs__image">
          <div className="chef__one">
            <img
              src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/chef-1.jpg"
              alt=""
            />
            <h2>Michale Joe</h2>
            <p>Expert in Cake Making</p>
          </div>

          <div className="chef__one">
            <img
              src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/chef-2.jpg"
              alt=""
            />
            <h2>Roger B.</h2>
            <p>Expert in Sandwich Making</p>
          </div>

          <div className="chef__one">
            <img
              src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/chef-3.jpg"
              alt=""
            />
            <h2>Mark J</h2>
            <p>Expert in Pizzas</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
