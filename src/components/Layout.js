import React, { Component } from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <main className={styles.container}>{this.props.children}</main>;
        <Footer />
      </>
    );
  }
}

export default Layout;
