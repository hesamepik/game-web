import React, { useState } from "react";
import styles from "../module/Contact.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("پیام شما ارسال شد! ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.contactPage}>
      <h1 className={styles.title}>📞 تماس با ما</h1>
      <p className={styles.subtitle}>
        خوشحال می‌شویم نظرات و پیشنهادات شما را دریافت کنیم. لطفا از طریق فرم یا راه‌های ارتباطی زیر با ما تماس بگیرید.
      </p>

      <div className={styles.contactContent}>
        {/* بخش اطلاعات تماس */}
        <div className={styles.infoSection}>
          <h2>اطلاعات تماس</h2>
          <div className={styles.infoItem}><FaPhone /> <span>+98 123 456 7890</span></div>
          <div className={styles.infoItem}><FaEnvelope /> <span>info@yourshop.com</span></div>
          <div className={styles.infoItem}><FaMapMarkerAlt /> <span>مشهد، ایران</span></div>

          <h3>شبکه‌های اجتماعی</h3>
          <div className={styles.socials}>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTelegram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>

          {/* نقشه کوچک */}
          <div className={styles.map}>
            <iframe
              src="https://maps.google.com/maps?q=Mashhad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen
              title="map"
            ></iframe>
          </div>
        </div>

        {/* فرم تماس */}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label>نام و نام خانوادگی</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>ایمیل</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>پیام شما</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />

          <button type="submit" className={styles.button}>
            ارسال پیام
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
