import React, { useEffect } from "react";
import styles from "./RemoveFormItemBtn.module.css";
import { FaTimesCircle } from "react-icons/fa";

const RemoveFormItemBtn = ({
  value,
  activeItemToggler,
  item,
  field,
  removeFormItemHandler,
}) => {
  const index = value.length > 1 ? value.length - 1 : 0;
  console.log(index);
  useEffect(() => {
    activeItemToggler(index);
  }, [index]);
  return (
    <>
      {value.length - 1 !== 0 && (
        <div className={styles.remove_wrapper}>
          <button
            className={styles.removebtn}
            onClick={() => {
              // this.props.activeItemToggler(
              //   this.props.value.length > 0 ? this.props.value.length - 1 : 0
              // );

              removeFormItemHandler(item.id, `${field}`);
            }}
          >
            <FaTimesCircle size="1rem" style={{ marginRight: "0.3rem" }} />{" "}
            Remove
          </button>
        </div>
      )}
    </>
  );
};

export default RemoveFormItemBtn;
