import React, { Component } from "react";
import styles from "./FormContent.module.css";

class FormContent extends Component {
  render() {
    return (
      <section className={styles.basicDetails}>{this.props.children}</section>
    );
  }
}

export default FormContent;
