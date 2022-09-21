import uniqid from "uniqid";
import { months, years } from "./helper/periodHelper";
import styles from "./Period.module.css";

const Period = ({
  heading,
  onChangeHandler,
  index,
  isStart,
  periodMonth,
  periodYear,
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="options_container">
      <h6 className={styles.period_heading}>{heading}</h6>
      <div className={styles.options_lists_wrapper}>
        <div className="options_wrapper">
          <label htmlFor="month" style={{ display: "block" }} />
          <select
            className="selector"
            id="month"
            name={isStart ? "startMonth" : "endMonth"}
            value={periodMonth}
            onChange={onChangeHandler(index)}
            required
          >
            <option disabled value="">
              month
            </option>
            {months.map((month) => {
              return (
                <option key={uniqid()} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
        </div>
        <div className="options_wrapper">
          <label htmlFor="year" style={{ display: "block" }} />
          <select
            className="selector"
            id="year"
            name={isStart ? "startYear" : "endYear"}
            value={periodYear}
            onChange={onChangeHandler(index)}
            required
          >
            <option disabled value="">
              Year
            </option>
            {years.map((year) => {
              return (
                <option key={uniqid()} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Period;
