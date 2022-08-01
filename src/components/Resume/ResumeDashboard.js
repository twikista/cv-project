import { Link, useNavigate } from "react-router-dom";
import styles from "./ResumeDashboard.module.css";
import { FiEdit } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const ResumeDashBoard = ({
  children,
  editStateToggler,
  deleteResumeHandler,
  clickedResume,
}) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.resume_dashboard}>
      <Link to="/" className={styles.link_btn}>
        <IoMdArrowRoundBack />
      </Link>
      <button className={styles.dashboard_btn} onClick={editStateToggler}>
        <FiEdit />
      </button>
      <button
        className={styles.dashboard_btn}
        onClick={() => {
          deleteResumeHandler(clickedResume.id);
          navigate("/");
        }}
      >
        <RiDeleteBin6Line />
      </button>
      {children}
    </nav>
  );
};

export default ResumeDashBoard;
