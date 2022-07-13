import React, { Component } from "react";
import styles from "./FormFooter.module.css";

class FormFooter extends Component {
  render() {
    const { step, next, previous, resetHandler } = this.props;
    return (
      <div className={styles.formfooter}>
        <nav className={this.props.step < 2 ? styles.single : styles.double}>
          {step > 1 && (
            <button
              className={`${styles.prevbtn} ${styles.btn}`}
              onClick={previous}
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              className={`
                ${
                  this.props.step < 2 ? styles.nextbtnFull : styles.nextbtnHalf
                } ${styles.btn} `}
              onClick={next}
            >
              Next
            </button>
          ) : (
            <button className={styles.submitbtn}>Submit</button>
          )}
        </nav>
        <div className="resetform">
          <button
            className={`${styles.resetbtn} ${styles.btn}`}
            onClick={resetHandler}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default FormFooter;
