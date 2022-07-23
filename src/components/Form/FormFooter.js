import React from "react";
import styles from "./FormFooter.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FormFooter = (props) => {
  const handler = () => {
    props.submitHandler();
    props.resetHandler();
    // props.next();
  };
  const navigate = useNavigate();
  const { step, next, previous, resetHandler } = props;
  return (
    <div className={styles.formfooter}>
      <nav
        className={
          props.step === 1 || props.step > 2 ? styles.single : styles.double
        }
      >
        {step > 1 && (
          <button
            className={`${
              props.step > 2 ? styles.prevbtnfull : styles.prevbtn
            } ${styles.btn}`}
            onClick={previous}
          >
            <FaChevronLeft style={{ fontSize: "16px" }} />
          </button>
        )}
        {step <= 2 && (
          <button
            className={`
                ${props.step < 2 ? styles.nextbtnfull : styles.nextbtn} ${
              styles.btn
            } `}
            onClick={next}
          >
            <FaChevronRight style={{ fontSize: "16px" }} />
          </button>
        )}
      </nav>
      <div className={styles.reset_form}>
        {step === 3 && (
          <button
            className={`${styles.submitbtn} ${styles.btn}`}
            onClick={() => {
              handler();
              navigate("/preview-resume");
            }}
          >
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
    </div>
  );
};

export default FormFooter;
