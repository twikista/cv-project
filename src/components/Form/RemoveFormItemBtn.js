import React, { Component } from "react";
import styles from "./RemoveFormItemBtn.module.css";
import { FaTimesCircle } from "react-icons/fa";

class RemoveFormItemBtn extends Component {
  render() {
    return (
      <>
        {this.props.value.length - 1 !== 0 && (
          <div className={styles.remove_wrapper}>
            <button
              className={styles.removebtn}
              onClick={() => {
                this.props.removeFormItemHandler(
                  this.props.item.id,
                  `${this.props.field}`
                );
              }}
            >
              <FaTimesCircle size="1rem" style={{ marginRight: "0.3rem" }} />{" "}
              Remove
            </button>
          </div>
        )}
      </>
    );
  }
}

export default RemoveFormItemBtn;
