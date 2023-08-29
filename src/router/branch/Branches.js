import React from 'react'
import './Branches.css'
import {IoLocationOutline} from 'react-icons/io5'
function Branches() {
    
  return (
    <div className='main__branches'>
        <h2 className='branch__text'>Bizning<span> Filiallarimmiz</span><IoLocationOutline/></h2>
        <h1 className='branch1'>Birinchi Filialimmiz</h1>
        <div className="branch__one">
            <div className="one">
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6018.60367168656!2d71.676633!3d41.04052800000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAyJzI1LjkiTiA3McKwNDAnMzUuOSJF!5e0!3m2!1sru!2s!4v1693235056923!5m2!1sru!2s"referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="two">
               <p> <span>Manzil:</span> Qizil kuprik gagarin</p>
               <h3>Biz bilan Bog'lanish: <span>907419131</span></h3>
               <h4> <span>Bizning ish Vaqtimmiz:</span> 8:00 dan 18:00 gacha</h4>
            </div>
        </div>
        <h1 className='branch1'>Ikkinchi Filialimmiz</h1>
        <div className="branch__two">
            <div className="one">
               <p> <span>Manzil:</span> RMK Aftakolona svitafor</p>
               <h3>Biz bilan Bog'lanish: <span>940790101</span></h3>
               <h4> <span>Bizning ish Vaqtimmiz:</span> 8:00 dan 18:00 gacha</h4>
            </div>
            <div className="two">
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6020.07952635495!2d71.675851!3d41.024386!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAxJzI3LjgiTiA3McKwNDAnMzMuMSJF!5e0!3m2!1sru!2s!4v1693237717260!5m2!1sru!2s"referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <h1 className='branch1'>Uchinchi Filialimmiz</h1>
        <div className="branch__one">
            <div className="one">
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6019.970193085423!2d71.631751!3d41.02558200000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAxJzMyLjEiTiA3McKwMzcnNTQuMyJF!5e0!3m2!1sru!2s!4v1693237855494!5m2!1sru!2s" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="two">
               <p> <span>Manzil:</span> Oromgoh </p>
               <h3>Biz bilan Bog'lanish: <span>931322727</span></h3>
               <h4> <span>Bizning ish Vaqtimmiz:</span> 8:00 dan 18:00 gacha</h4>
            </div>
        </div><br />
    </div>
  )
}

export default Branches