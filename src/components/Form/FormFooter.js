import React, { Component } from "react";
import styles from "./FormFooter.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

class FormFooter extends Component {
  render() {
    const { step, next, previous, resetHandler } = this.props;
    return (
      <div className={styles.formfooter}>
        <div className="resetform">
          {step === 3 && (
            <button className={`${styles.submitbtn} ${styles.btn}`}>
              Submit
            </button>
          )}
          <button
            className={`${styles.resetbtn} ${styles.btn}`}
            onClick={resetHandler}
          >
            Reset
          </button>
        </div>
        <nav
          className={
            this.props.step === 1 || this.props.step > 2
              ? styles.single
              : styles.double
          }
        >
          {step > 1 && (
            <button
              className={`${
                this.props.step > 2 ? styles.prevbtnfull : styles.prevbtn
              } ${styles.btn}`}
              onClick={previous}
            >
              <FaChevronLeft style={{ fontSize: "16px" }} />
            </button>
          )}
          {step <= 2 && (
            <button
              className={`
                ${this.props.step < 2 ? styles.nextbtnfull : styles.nextbtn} ${
                styles.btn
              } `}
              onClick={next}
            >
              <FaChevronRight style={{ fontSize: "16px" }} />
            </button>
          )}
        </nav>
      </div>
    );
  }
}

export default FormFooter;
