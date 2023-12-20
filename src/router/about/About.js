import React, { useEffect } from "react";
import "./About.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import about3 from "../../assets/about_3.jpg";
import about5 from "../../assets/about/bg3.jpg";
import about6 from "../../assets/about/bg4.jpg";
import about8 from "../../assets/about/bg6.jpg";

function About() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="about__blog">
        {/* <img src={about4} /> */}
        <div className="about__blog_img">
          <div className="about__blog_img_dark">
            <h1>Biz haqimizda ma'lumotlarni shu sahifada ko'rishingiz mumkin</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, hic veniam vero eaque aliquam veritatis ut earum iusto?
              Qui, voluptates.
            </p>
          </div>
        </div>
        <div className="about__blog__bottom">
        <div className="about__blog_first">
          <div className="about__blog_first_left">
            <h1>Bizning Mahsulotlarimiz haqida</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, totam.
            </p>
          </div>
          <div className="about__blog_first_right">
            <img src={about5} alt=""/>
            <img src={about3} alt=""/>
          </div>
        </div>
        <div className="about__blog_second">
          <div className="about__blog_second_left">
          </div>
          <div className="about__blog_first_left about__order">
            <h1>Bular bizning tajribali qandolatchilarimiz </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, earum.
            </p>
          </div>
        </div>
        <div className="about__blog_first">
          <div className="about__blog_first_left">
            <h1>Biz ko'p joylarda xizmat ko'rsatganmiz</h1>
            <p>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, eum? Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="about__blog_first_right">
            <img src={about6} alt=""/>
            <img src={about8} alt=""/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
