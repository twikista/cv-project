import { Link } from "react-router-dom";
import ResumeThumbnail from "./ResumeThumbnail";
import { FaRegPlusSquare } from "react-icons/fa";
import styles from "./ResumeThumbnails.module.css";

const ResumeThumbnails = ({ resumes }) => {
  return (
    <div className="container" style={{ display: "flex", gap: "10px" }}>
      {resumes.map((resume) => (
        <ResumeThumbnail key={resume.id} resume={resume} />
      ))}
      <Link to={"new-resume"} className={styles.link}>
        <div className="new_resume_btn_wrapper">
          <button className={styles.new_resume_btn}>
            <FaRegPlusSquare /> create new resume
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ResumeThumbnails;
