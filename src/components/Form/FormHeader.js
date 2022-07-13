import React, { Component } from "react";
import styles from "./FormHeader.module.css";

class FormHeader extends Component {
  render() {
    return (
      <div className={styles.heading}>
        {this.props.children}
        <h2>{this.props.heading}</h2>
      </div>
    );
  }
}

export default FormHeader;
