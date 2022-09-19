import React, { useRef } from "react";
import RemoveFormItemBtn from "./RemoveFormItemBtn";
import FormItemThumbnail from "./FormItemThumbnail";
import styles from "./EducationDetailsFormInputs.module.css";
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
  const { school, qualification, duration } = item;
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
          <label htmlFor="qualification" style={{ display: "block" }} />
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={qualification}
            onChange={onChangeHandler(index)}
            placeholder="Qualification"
          />
          <label htmlFor="duration" style={{ display: "block" }} />
          <input
            type="text"
            id="duration"
            name="duration"
            value={duration}
            onChange={onChangeHandler(index)}
            placeholder="Duration"
          />
        </div>
      </div>
    </article>
  );
};

export default EducationDeatilsFormInputs;
