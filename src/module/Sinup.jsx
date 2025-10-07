import React, { useState } from "react";
import styles from "../module/singup.module.css";

function SignUp() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("رمز عبور و تکرار آن مطابقت ندارند!");
      return;
    }
    console.log("ثبت نام موفق", formData);
    alert("ثبت نام با موفقیت انجام شد ✅");
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupBox}>
        <h1>ثبت نام</h1>
        <p>برای ساخت حساب کاربری جدید اطلاعات خود را وارد کنید</p>

        <form onSubmit={submitHandler} className={styles.form}>
          <input
            type="text"
            name="fullname"
            placeholder="نام و نام خانوادگی"
            value={formData.fullname}
            onChange={changeHandler}
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="تکرار رمز عبور"
            value={formData.confirmPassword}
            onChange={changeHandler}
            required
          />

          <button type="submit">ثبت نام</button>
        </form>

        <div className={styles.footerText}>
          <p>
            قبلاً ثبت نام کرده‌اید؟ <a href="/login">ورود</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
