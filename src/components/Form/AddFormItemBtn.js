import React, { Component } from "react";
import styles from "./AddFormItemBtn.module.css";

class AddFormItemBtn extends Component {
  render() {
    return (
      <>
        {this.props.value.length < 4 && (
          <div className={styles.addbtnwrapper}>
            <button
              className={styles.addEducationBtn}
              onClick={() => this.props.addFormItemHandler("experience")}
            >
              + {`${this.props.text}`}
            </button>
          </div>
        )}
      </>
    );
  }
}

export default AddFormItemBtn;
