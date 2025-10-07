import React, { useState, useEffect } from 'react'
import styles from "../layout/Layouts.module.css"
import daste from "../../ایکن ها/daste.png"
import search from "../../ایکن ها/search.png"
import mah from "../../ایکن ها/mah.png"
 import img from "../../فوترها/img.png"
 import img1 from "../../فوترها/img1.png"
 import img2 from "../../فوترها/img2.png"
 import back from "../../ایکن ها/back namad.png"
 import namad from "../../ایکن ها/namad.png"
 import instagram from "../../ایکن ها/instagram.png"
 import whatsapp from "../../ایکن ها/whtsapp.png"
 import linkdin from "../../ایکن ها/linkdin.png"
 import twiter from "../../ایکن ها/twiter.png"
import { TiDeleteOutline } from "react-icons/ti";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { usecard } from '../components/ContextPro.jsx'
import Contactus from '../module/Contactus.jsx'



function Layout({children}) {
  const {state} = usecard();
    const [showInput, setShowInput] = useState(false);
  

  const inputhand =()=>{
    setShowInput(!showInput)
    console.log(showInput)
  }
  return (
    <>
    <header>
      <div className={styles.navbar}> 
          <ul>
              <li><img src={daste} alt="daste"/></li>
            <a href="/"><li>خانه</li> </a>  
          
          <a href='/aboutus'>  <li>درباره ما</li> </a>   
             <a href='/contactus'> <li>تماس با ما</li></a> 
            <a href='#'> <li>پنل شما</li></a> 
          </ul>
      </div>
      <div className={styles.leftnavbar}>
          <ul>
              <li>
            
           {showInput?<div><input type="text" /> <img src={search} alt=""  onClick={inputhand}/></div>: <img src={search} alt=""  onClick={inputhand}/>}
              </li>
              <li><img src={mah} alt="mah" /></li>
              <li>
                <Link to={"/propage"}>
                <div className={styles.cartCount}>{state?.itemCounter} </div>
                <button>سبد خرید </button>
                </Link>
                
          
                </li> 
          </ul>
      </div>
    </header>
    {children}
    <footer>
      <div className={styles.first}>
          <h2>داغ ترین مطالب هفته</h2>
          <div className={styles.fimg}><div><img src={img} alt="" /></div> <div><h4>این هفته چه بازی های معرفی شدند </h4></div></div>
          <div className={styles.fimg}> <img src={img1} alt="" /><h4>جدید ترین تریلر ها</h4></div>
          <div className={styles.fimg}> <img src={img2} alt="" /><h4> بازی های داغ</h4></div>
      </div>
      <div className={styles.tow}>
          <h2> پر بازدید ترین صفحه ها</h2>
          <ul>
            <li>فروشگاه</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>مقالات</li>
            <li>مقالات</li>
            <li>مقالات</li>
          </ul>
      </div>
      <div className={styles.three}>
          <h2> عضویت در خبر نامه</h2>
         
          <div className={styles.inputContainer}>
  <input
    type="text"
    placeholder="ایمیل خود را وارد کنید"
    className={styles.inputField}
  />
  <button className={styles.inputButton}>
  <FaLongArrowAltLeft style={{ background: 'none' }} />

  </button>
</div>

          <div>
          <div className={styles.imageWrapper}>
  <img src={back} alt="back" className={styles.backgroundImage} />
  <img src={namad} alt="namad" className={styles.overlayImage} />
</div>

</div>
      </div>
    </footer>
<div className={styles.social}>
<div><h3>کپی هر کدام از مطالب تنها با کسب مجوز مکتوب امکان پذیر است</h3></div>
<div className={styles.iconso}>
    <img src={instagram}></img>
    <img src={whatsapp}></img>
    <img src={linkdin}></img>
    <img src={twiter}></img>
</div>

</div>
    </>
  )
}

export default Layout
