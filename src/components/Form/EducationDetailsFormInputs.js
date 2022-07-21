import RemoveFormItemBtn from "./RemoveFormItemBtn";
import styles from "./EducationDetailsFormInputs.module.css";
const EducationDeatilsFormInputs = ({
  onChangeHandler,
  value,
  index,
  item,
  field,
  removeFormItemHandler,
}) => {
  const { school, qualification, duration } = item;

  return (
    <article className={styles.form_fields}>
      <RemoveFormItemBtn
        value={value}
        removeFormItemHandler={removeFormItemHandler}
        item={item}
        field={field}
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
    </article>
  );
};

export default EducationDeatilsFormInputs;
