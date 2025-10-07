 import React, { useState } from "react";
import styles from "../module/Login.module.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("ورود موفق", formData);
    alert("با موفقیت وارد شدید ✅");
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <h1>ورود</h1>
        <p>برای دسترسی به حساب کاربری خود وارد شوید</p>

        <form onSubmit={submitHandler} className={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            value={formData.email}
            onChange={changeHandler}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            value={formData.password}
            onChange={changeHandler}
            required
          />

          <button type="submit">ورود</button>
        </form>

        <div className={styles.footerText}>
          <p>
            حساب کاربری ندارید؟ <a href="/login">ثبت‌نام</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
