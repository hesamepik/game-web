import React from "react";
import styles from "../module/AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.aboutPage}>
  
      <header className={styles.header}>
        <h1>درباره ما</h1>
        <p>
          ما یک فروشگاه آنلاین هستیم که بهترین بازی‌ها و محصولات دیجیتال را
          با بهترین قیمت و خدمات پشتیبانی به شما ارائه می‌کنیم.
        </p>
      </header>

      
      <section className={styles.mission}>
        <h2>🎯 ماموریت ما</h2>
        <p>
          هدف ما فراهم کردن تجربه‌ای ساده، سریع و امن برای خرید آنلاین است.
          ما اعتقاد داریم که هر مشتری باید بهترین خدمات را دریافت کند.
        </p>
      </section>

   
      <section className={styles.features}>
        <h2>✨ چرا ما را انتخاب کنید؟</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>⚡ سرعت</h3>
            <p>ارسال سریع و دسترسی فوری به محصولات دیجیتال.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>💳 پرداخت امن</h3>
            <p>پرداخت آنلاین مطمئن با درگاه‌های معتبر بانکی.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>🤝 پشتیبانی ۲۴/۷</h3>
            <p>پشتیبانی همیشگی برای پاسخ به سوالات شما.</p>
          </div>
        </div>
      </section>


      <section className={styles.team}>
        <h2>👨‍💻 تیم ما</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <img src="/images/team1.jpg" alt="member" />
            <h3>حسام الدین  ابوذر</h3>
            <p>مدیر فنی</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/images/team2.jpg" alt="member" />
            <h3> حسام الدین ابوذر</h3>
            <p>طراح رابط کاربری</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/images/team3.jpg" alt="member" />
            <h3> حسام الدین ابوذر</h3>
            <p>پشتیبانی مشتری</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>به خانواده ما بپیوندید 🎉</h2>
        <p>
          همین حالا ثبت‌نام کنید و از تخفیف‌ها و پیشنهادهای ویژه ما بهره‌مند
          شوید!
        </p>
        <button>ثبت‌نام</button>
      </section>
    </div>
  );
}

export default AboutUs;
