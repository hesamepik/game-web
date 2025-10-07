import React from 'react';
import { card } from "../card.js"; // آرایه محصولات
import styles from '../module/Card.module.css';
import { Link } from 'react-router-dom';
import { usecard } from "../components/ContextPro.jsx";

function Card() {
  const { state, dispatch } = usecard();

  const ClickHandler = (pro) => {
    dispatch({ type: "ADD_ITEM", payload: pro });
  };

  return (
    <>
      <div className={styles.top}>
        <h1>جدیدترین بازی‌های فروشگاه</h1>
      </div>

      <div className={styles.container}>
        {card.map((p) => (
          <div className={styles.cardWrapper} key={p.id}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={p.image} alt={p.title} className={styles.image} />
              </div>

              <div className={styles.titleSection}>
                <h1>{p.title}</h1>
                <h3>{p.price.toLocaleString()} تومان</h3>
              </div>

              <div className={styles.footerCard}>
                <h5>{p.desc}</h5>

                {/* دکمه‌ها داخل کارت */}
                <button
                  className={styles.button}
                  onClick={() => ClickHandler(p)}
                >
                  خرید
                </button>

                <Link to={`/products/${p.id}`}>
                  <button className={styles.button}>جزئیات محصول</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
