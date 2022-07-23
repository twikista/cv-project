import { Link } from "react-router-dom";
import ResumeThumbnail from "./ResumeThumbnail";
import { FaRegPlusSquare } from "react-icons/fa";
import styles from "./ResumeThumbnails.module.css";

const ResumeThumbnails = ({ resumes, togglePreview }) => {
  return (
    <div className={styles.resumes_container}>
      {resumes.length !== 0 &&
        resumes.map((resume) => (
          <ResumeThumbnail
            key={resume.id}
            resume={resume}
            togglePreview={togglePreview}
          />
        ))}
      <Link
        to={"new-resume"}
        className={`${styles.link} ${styles.resume_card}`}
      >
        <button className={styles.new_resume_btn}>
          <FaRegPlusSquare /> create new resume
        </button>
      </Link>
    </div>
  );
};

export default ResumeThumbnails;
