import React from 'react'
import { litelbaner } from '../litelbaner'
import styles from "./Litelbaner.module.css"
function Litelbaner() {
  return (
    <div>
{litelbaner.map( (p)=>(
    
<div key={p.id} className={styles.container}>
<div>
    <img src={p.image}/> 
    </div>
<div><h1>{p.title}</h1>
<h3>{p.desc}</h3>
<button>مشاهده همه</button>

</div>

</div>
)
)}

    </div>
  )
}

export default Litelbaner