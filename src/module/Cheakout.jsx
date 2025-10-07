// Cart.jsx
import React from "react";
import { usecard } from "../components/ContextPro";
import styles from "../module/Cheakout.module.css";

function Cart() {
  const { state, dispatch } = usecard();

  if (!state.selecteditem || state.selecteditem.length === 0) {
    return (
      <div className={styles.empty}>
        سبد خرید شما خالی است 😔
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>سبد خرید شما</h1>

      <div className={styles.items}>
        {state.selecteditem.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt={item.title} className={styles.image} />

            <div className={styles.info}>
              <h2>{item.title}</h2>
              <h3>{item.price.toLocaleString()} تومان</h3>
            </div>

            <div className={styles.controls}>
              <button onClick={() => dispatch({ type: "Dec", payload: item })}>
                -
              </button>
              <span className={styles.qty}>{item.quantity}</span>
              <button onClick={() => dispatch({ type: "INC", payload: item })}>
                +
              </button>
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}>
                پاک کردن
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <h2>جمع کل سبد خرید</h2>
        <p>تعداد آیتم‌ها: {state.itemCounter}</p>
        <p>مبلغ کل: {state.total.toLocaleString()} تومان</p>
        <button>پرداخت نهایی</button>
      </div>
    </div>
  );
}

export default Cart;
