import React from 'react'
import "./About.css"
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";


function About() {


  return (
    <div className='about'>

        <div className="main__aboutus__text">
          <h2>About Us</h2>
          <div className="back__color"></div>
        </div>

        <div className="container about__our__approach">
        <h1>Bizning yondashuv</h1>
        <p></p>
        <h2>Bizning maftunkor lazzatlar dunyomizga xush kelibsiz. Bu tort ishqibozlari va hayotning shirin daqiqalarini qadrlaydiganlar uchun boshpana. Bizning tort nonvoyxonamizda shirinlik pishirish shunchaki vazifa emas; Bu biz har bir o'lchov, har bir ingredient va har bir muzqaymoq bilan ishtiyoq bilan yaratadigan san'at turi.</h2>
          <h3>Baked goods have been around for thousands of years. The art of baking was developed early during the Roman Empire. It was a highly famous art as Roman citizens loved baked goods and demanded for them frequently for important occasions such as feasts and weddings etc. Due to the fame and desire that the art of baking received, around 300 BC, baking was introduced as an occupation and respectable profession for Romans.</h3>

          <div className="approach__images">
            <img src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/bakery-1.jpg" alt="" />
            <img src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/bakery-2.jpg" alt="" />
            <img src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/bakery-3.jpg" alt="" />
          </div>
        </div>


        <div style={{backgroundImage: `url("https://i.ibb.co/SN8HcTx/2.jpg")`, backgroundRepeat: 'no-repeat'}} className="about__real__taste">
        <h2>Haqiqiy Tam</h2>
        <h3>A light, sour wheat dough with roasted walnuts and freshly picked rosemary, thyme, poppy seeds, <br /> parsley and sage</h3>
        </div>


        <div className="container about__our__mission">
      <div className="mission__text">
        <h2>Bizning maqsad</h2>
      </div>



      <div className="about__our__mission_second__text">
      <div className="mission__first__text">
        <h1>This drastic appeal for baked goods promoted baking all throughout Europe and expanded <br /> into the eastern parts of Asia. Bakers started baking breads and goods at home and selling <br /> them out on the streets.</h1>
      </div>

      <div className="mission__second__text">
    <h1>Baked goods have been around for thousands of years. The art of baking was developed early during the Roman <br /> Empire. It was a highly famous art as Roman citizens loved baked goods and demanded for <br /> them frequently for important occasions such as feasts and weddings etc. Due to the fame and desire that the art of baking received, <br /> around 300 BC, baking was introduced as an occupation and respectable profession for Romans.</h1>
      </div>

      {/* <div className="mission__category">
        <p>Custom cakes</p>
        <p>Birthday cakes</p>
        <p>Wedding cakes</p>
        <p>European cakes</p>
      </div> */}

      </div>

        </div>



    <div className="about__swiper">
    <h1>Mijozlar nima deydi</h1>

    <Swiper className=" mySwiper">
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


    </div>




    <div className="our__chefs">

    <div className="our__chefs__text">
    <h1>Our Chefs</h1>
    <p>We have awesome chefs in our team. We are also always looking  for new people to join our team. <br /> Our chefs know their stuff very <br /> well. </p>
    </div>


    <div className="our__chefs__image">

      <div className="chef__one">
    <img src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/chef-1.jpg" alt="" />
      <h2>Michale Joe</h2>
      <p>Expert in Cake Making</p>
      </div>

      <div className="chef__one">
    <img src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/chef-2.jpg" alt="" />
      <h2>Roger B.</h2>
      <p>Expert in Sandwich Making</p>
      </div>

      <div className="chef__one">
    <img src="https://cakeciouswp.bolvosites.com/demo1/wp-content/uploads/sites/14/2018/06/chef-3.jpg" alt="" />
      <h2>Mark J</h2>
      <p>Expert in Pizzas</p>
      </div>

    </div>



    </div>
        




    </div>
  )
}

export default About