import React, { useRef } from "react";
import RemoveFormItemBtn from "./RemoveFormItemBtn";
import FormItemThumbnail from "./FormItemThumbnail";
import Period from "./Period";
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
  const { company, role, city, startMonth, startYear, endMonth, endYear } =
    item;
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
          <label htmlFor="city" style={{ display: "block" }} />
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={onChangeHandler(index)}
            placeholder="City"
          />
          <div className={styles.period_wrapper}>
            <Period
              heading="start date"
              onChangeHandler={onChangeHandler}
              index={index}
              isStart={true}
              periodMonth={startMonth}
              periodYear={startYear}
            />
            <Period
              heading="end date"
              onChangeHandler={onChangeHandler}
              index={index}
              isStart={false}
              periodMonth={endMonth}
              periodYear={endYear}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default EmploymentDetailsInputs;
