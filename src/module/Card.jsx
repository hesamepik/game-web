import React from 'react';
import { card } from "../card.js";
import styles from '../module/Card.module.css';
import { Link } from 'react-router-dom';

function Card() {
  return (
  <>
  <div className={styles.top} ><h1>جدید ترین بازی های فروشگاه</h1></div>
    
    <div className={styles.container}>
      
      {card.map((p, index) => (
         <Link to={`/products/${p.id}`}>

          <div className={styles.card} key={index}>
          <div className={styles.imageWrapper}>
            <img src={p.image} alt={p.title} className={styles.image} />
          </div>

          <div className={styles.titleSection}>
            <h1>{p.title}</h1>
            <h3>{p.price} تومان</h3>
          </div>

          <div className={styles.footerCard}>
            <button className={styles.button}>خرید</button>
            <h5>{p.desc}</h5>
          </div>
        </div>
         </Link>
      ))}
    </div>
      </>
  ); 
}

export default Card;
