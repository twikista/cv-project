import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";

const OptionsSelector = ({ period, isOpen, selectToggleHandler }) => {
  return (
    <div className="selctor" onClick={selectToggleHandler}>
      <span>{period}</span>
      {isOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
    </div>
  );
};

export default OptionsSelector;
