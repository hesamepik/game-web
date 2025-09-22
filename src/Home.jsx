import React from 'react'
import styles from "../src/Home.module.css"
import img1 from "../بنر ها/1.png"
import img2 from "../بنر ها/Rectangle 7.png"
import Card from './module/Card'
import Maghalat from './module/Maghalat'
import a from "../جدید ترین نقد ها/a.png"
import b from "../جدید ترین نقد ها/b.png"
import c from "../جدید ترین نقد ها/c.png"
function Home() {
  return (
    <div>
<div className={styles.baner}>
<img src={img1}></img>
</div>
<div className={styles.footerbaner}>
<div className={styles.sabtnam}>

<button> ثبت نام کنید </button>
</div>
<div className={styles.maghale}>
   <img src={img2}></img>
   <div className={styles.rectangle}>
   <h1>Call of Duty Warzone</h1>
    <h3>مانند دیگر بازی های بتل رویال سوار بر هواپیما میشوید <br />و روی نقشه فرود می اید وجه تفاوت این بازی نسبت به بقیه در تعداد بزیکنان است </h3>
    <button>بیشتر</button>
   </div>
 
</div>

</div>
<div className={styles.bodyone}>
<Card/>

</div>
 <div className={styles.text}> <h1>جدیدترین مقالات </h1></div>
 <div><Maghalat/></div>


 <div className={styles.text}> <h1> جدیدترین نقد و برسی ها </h1></div>
<div className={styles.naghadvbarasi}>

<div><img src={a} alt="" /></div>
<div><img src={b} alt="" /></div>
<div><img src={c} alt="" /></div>
</div>
<div className={styles.last}>
<button >مشاهده همه</button>
</div>


    </div>
  )
}

export default Home