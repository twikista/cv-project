import React, { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <h1 className={styles.logo}>cv-builder</h1>
        </div>
      </header>
    );
  }
}

export default Header;
