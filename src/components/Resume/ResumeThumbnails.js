import { Link } from "react-router-dom";
import ResumeThumbnail from "./ResumeThumbnail";
import { FaPlus } from "react-icons/fa";
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
          create new resume
          <FaPlus />
        </button>
      </Link>
    </div>
  );
};

export default ResumeThumbnails;
