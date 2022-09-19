import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import styles from "./FormItemThumbnail.module.css";

const FormItemThumbnail = ({ val, value, activeItemToggler, index }) => {
  console.log(value);
  return (
    <div className={styles.thumbnail_wrapper}>
      <span>{val}</span>
      <button
        className={styles.toggle_btn}
        style={{
          backgroundColor: "transparent",
          appearance: "none",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={() => activeItemToggler(index)}
      >
        <HiOutlineChevronDown />
      </button>
    </div>
  );
};

export default FormItemThumbnail;
