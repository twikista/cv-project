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
              <a
                href="https://github.com/twikista"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aaronanama"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/aaronanama"
                rel="noreferrer"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.legal}>
          <span className="copyright">&copy; 2022 </span>
          <span>Aaron Anama</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
