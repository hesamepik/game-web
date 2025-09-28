import React from 'react'
import img1 from "../../بنر ها/nighber.png"
import styles from "./Maghalat.module.css"
import Litelbaner from './Litelbaner'
function Maghalat() {
  return (
<>
<div className={styles.container}>

<div className={styles.bigbaner}>
<img src={img1}></img>
<div className={styles.text}><h1></h1></div>
</div>
<div className={styles.litelbaner}>
    <Litelbaner/>
</div>


</div>


</>
  )
}

export default Maghalat