import React, { useRef } from "react";
import RemoveFormItemBtn from "./RemoveFormItemBtn";
import FormItemThumbnail from "./FormItemThumbnail";
import styles from "./EducationDetailsFormInputs.module.css";
import Period from "./Period";
const EducationDeatilsFormInputs = ({
  onChangeHandler,
  value,
  index,
  item,
  field,
  removeFormItemHandler,
  active,
  activeItemToggler,
}) => {
  const {
    school,
    qualification,
    city,
    startMonth,
    startYear,
    endMonth,
    endYear,
  } = item;
  const inputsWrapperRef = useRef();

  return (
    <article className={styles.form_fields}>
      {active || (
        <FormItemThumbnail
          val={value[index].school}
          activeItemToggler={activeItemToggler}
          index={index}
        />
      )}
      <div
        className={styles.inputs_wrapper}
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
          <label htmlFor="school" style={{ display: "block" }} />
          <input
            type="text"
            id="school"
            name="school"
            value={school}
            onChange={onChangeHandler(index)}
            placeholder="Name of Institution"
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
          <label htmlFor="qualification" style={{ display: "block" }} />
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={qualification}
            onChange={onChangeHandler(index)}
            placeholder="Qualification"
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

export default EducationDeatilsFormInputs;
