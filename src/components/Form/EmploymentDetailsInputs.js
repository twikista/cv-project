import { FaCommentsDollar } from "react-icons/fa";
import RemoveFormItemBtn from "./RemoveFormItemBtn";
const EmploymentDetailsInputs = ({
  onChangeHandler,
  value,
  index,
  item,
  field,
  removeFormItemHandler,
}) => {
  const { company, role, period } = item;

  return (
    <article className="experience">
      <RemoveFormItemBtn
        value={value}
        removeFormItemHandler={removeFormItemHandler}
        item={item}
        field={field}
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
    </article>
  );
};

export default EmploymentDetailsInputs;
