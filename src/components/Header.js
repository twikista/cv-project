import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={`${styles.header} ${styles.flex}`}>
        <Link to="/" className={styles.link}>
          <div className={`${styles.logo_container} ${styles.flex}`}>
            <div className={`${styles.logo} ${styles.flex}`}>
              <div className={`${styles.outer} ${styles.flex}`}>
                <div className={styles.inner} />
              </div>
            </div>
            <span className={styles.logo_text}>Smartcv</span>
          </div>
        </Link>
      </header>
    );
  }
}

export default Header;
