import React, { Component } from "react";
import styles from "./AddFormItemBtn.module.css";

class AddFormItemBtn extends Component {
  componentDidUpdate(prevProp, PrevState) {
    if (prevProp.value.length !== this.props.value.length) {
      this.props.activeItemToggler(this.props.value.length);
    }
  }
  render() {
    console.log(this.props.value.length - 1);
    return (
      <>
        {this.props.value.length < 4 && (
          <div className={styles.addbtnwrapper}>
            <button
              className={styles.addEducationBtn}
              onClick={() => {
                this.props.addFormItemHandler("experience");
              }}
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
