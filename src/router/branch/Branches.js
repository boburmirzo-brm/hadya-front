import React from 'react';
import './Branches.css';
import { IoLocationOutline } from 'react-icons/io5';

function Branches() {
  return (
    <div className='main__branches'>
      <h2 className='branch__text'>
        Bizning<span> Filiallarimmiz</span>
        <IoLocationOutline />
      </h2>
      <div className="branch__one">
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6018.60367168656!2d71.676633!3d41.04052800000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAyJzI1LjkiTiA3McKwNDAnMzUuOSJF!5e0!3m2!1sru!2s!4v1693235056923!5m2!1sru!2s" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="info">
          <p><span>Manzil:</span> Qizil kuprik gagarin</p>
          <h3>Biz bilan Bog'lanish: <a href="">907419131</a></h3>
          <h4><span>Bizning ish Vaqtimmiz:</span> 8:00 dan 18:00 gacha</h4>
        </div>
      </div><br />
      <div className="branch__one">
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6018.60367168656!2d71.676633!3d41.04052800000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAyJzI1LjkiTiA3McKwNDAnMzUuOSJF!5e0!3m2!1sru!2s!4v1693235056923!5m2!1sru!2s" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="info">
          <p><span>Manzil:</span> Qizil kuprik gagarin</p>
          <h3>Biz bilan Bog'lanish: <a href="">907419131</a></h3>
          <h4><span>Bizning ish Vaqtimmiz:</span> 8:00 dan 18:00 gacha</h4>
        </div>
      </div><br />
      <div className="branch__one">
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6018.60367168656!2d71.676633!3d41.04052800000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAyJzI1LjkiTiA3McKwNDAnMzUuOSJF!5e0!3m2!1sru!2s!4v1693235056923!5m2!1sru!2s" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="info">
          <p><span>Manzil:</span> Qizil kuprik gagarin</p>
          <h3>Biz bilan Bog'lanish: <a href="">907419131</a></h3>
          <h4><span>Bizning ish Vaqtimmiz:</span> 8:00 dan 18:00 gacha</h4>
        </div>
      </div><br />
    </div>
  );
}

export default Branches;
