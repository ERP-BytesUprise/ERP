import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/HomeNavbar.module.css";

const HomeNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.letterE}>E</span>
        <span className={styles.letterR}>R</span>
        <span className={styles.letterP}>P</span>
        <span className={styles.daily}>.daily</span>
      </div>

      <ul className={styles.navbarlinks}>
        <li>
          <a href="/apps">Apps</a>
        </li>
        <li>
          <a href="/community">Community</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className={styles.buttons}>
        <Link to="/Login">
          <button type="button" className={styles.signin}>
            Sign in
          </button>
        </Link>
        <button type="button" className={styles.tryit}>
          Try it free
        </button>
      </div>
    </nav>
  );
};

export default HomeNavbar;
