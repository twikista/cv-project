import React, { Component } from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.socials}>
          <ul className={styles.socials_list}>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
        <div className={styles.legal}>
          <span>Coded by Aaron Anama</span>
          <span className="copyright">&copy; 2022 </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
