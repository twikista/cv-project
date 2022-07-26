import React, { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={`${styles.header} ${styles.flex}`}>
        <div className={`${styles.logo_container} ${styles.flex}`}>
          <div className={`${styles.logo} ${styles.flex}`}>
            <div className={`${styles.outer} ${styles.flex}`}>
              <div className={styles.inner} />
            </div>
          </div>
          <span className={styles.logo_text}>Smartcv</span>
        </div>
      </header>
    );
  }
}

export default Header;
