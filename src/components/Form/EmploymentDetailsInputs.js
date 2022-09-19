import React, { useRef } from "react";
import RemoveFormItemBtn from "./RemoveFormItemBtn";
import FormItemThumbnail from "./FormItemThumbnail";
import styles from "./EmploymentDetailsFormInputs.module.css";
const EmploymentDetailsInputs = ({
  onChangeHandler,
  value,
  index,
  item,
  field,
  removeFormItemHandler,
  active,
  activeItemToggler,
}) => {
  const { company, role, period } = item;
  console.log(active, index);
  const inputsWrapperRef = useRef();

  return (
    <article className="experience">
      {active || (
        <FormItemThumbnail
          val={value[index].company}
          value={value}
          activeItemToggler={activeItemToggler}
          index={index}
        />
      )}
      <div
        className={`${styles.inputs_wrapper} `}
        ref={inputsWrapperRef}
        style={
          active ? { height: inputsWrapperRef.scrollHeight } : { height: "0" }
        }
      >
        <RemoveFormItemBtn
          value={value}
          removeFormItemHandler={removeFormItemHandler}
          item={item}
          field={field}
          activeItemToggler={activeItemToggler}
        />
        <div className="inputs">
          <label htmlFor="company" style={{ display: "block" }} />
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={onChangeHandler(index)}
            placeholder="Company Name"
          />
          <label htmlFor="role" style={{ display: "block" }} />
          <input
            type="text"
            id="role"
            name="role"
            value={role}
            onChange={onChangeHandler(index)}
            placeholder="Role"
          />
          <label htmlFor="period" style={{ display: "block" }} />
          <input
            type="text"
            id="period"
            name="period"
            value={period}
            onChange={onChangeHandler(index)}
            placeholder="Period"
          />
        </div>
      </div>
    </article>
  );
};

export default EmploymentDetailsInputs;
