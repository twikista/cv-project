import { Link, useNavigate } from "react-router-dom";
import styles from "./ResumeDashboard.module.css";

const ResumeDashBoard = ({
  children,
  editStateToggler,
  deleteResumeHandler,
  clickedResume,
}) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.resume_tools}>
      <Link to="/">back</Link>
      <button className={styles.edit_btn} onClick={editStateToggler}>
        Edit
      </button>
      <button
        className={styles.delete_btn}
        onClick={() => {
          deleteResumeHandler(clickedResume.id);
          navigate("/");
        }}
      >
        delete
      </button>
      {children}
    </nav>
  );
};

export default ResumeDashBoard;
