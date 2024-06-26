import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createUser } from "../../features/user/userSlice";

import styles from "./User.module.css";

export default function UserSignUpForm({ closeForm, toggleCurrenFormType }) {
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).some(val => !val)
    if(isNotEmpty) return


    dispatch(createUser(values))
    closeForm()
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className={styles.title}>Sign up</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="name"
            name="name"
            placeholder="Your name"
            value={values.name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="avatar"
            name="avatar"
            placeholder="Your avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.link} onClick={() => {toggleCurrenFormType('login')}}>I already have a account</div>
        <button className={styles.submit} type="submit">
          Create an account
        </button>
      </form>
    </div>
  );
}
