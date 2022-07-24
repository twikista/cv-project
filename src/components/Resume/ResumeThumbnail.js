import { Link } from "react-router-dom";
import styles from "./ResumeThumbnail.module.css";
const ResumeThumbnail = ({ resume, togglePreview }) => {
  const { firstName, lastName } = resume.basicDetails;
  const date = new Date(resume.time);
  const weekday = date.toLocaleString([], {
    weekday: "short",
  });
  const month = date.toLocaleString([], {
    month: "short",
  });
  const year = date.toLocaleString([], {
    year: "numeric",
  });
  const day = date.toLocaleString([], {
    day: "2-digit",
  });
  const time = date.toLocaleString([], { timeStyle: "short" });
  return (
    <Link
      to={`/resumes/${resume.id}`}
      onClick={() => togglePreview(false)}
      className={styles.resume_card}
    >
      <div className={styles.thumbnail_header}>
        <div className={styles.resume_name} />
      </div>
      <div className={styles.thumbnail_content}>
        <div className={styles.personal_details}>
          <div className={styles.heading}>
            <span className={styles.heading_text} />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.name}`} />
            </div>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.phone}`} />
            </div>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.name}`} />
            </div>
          </div>
        </div>
        <div className={styles.personal_details}>
          {/* <div className={styles.heading}>
            <span className={styles.heading_text} />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.name}`} />
            </div>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.phone}`} />
            </div>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.name}`} />
            </div>
          </div> */}
          <div className={styles.resume_info}>
            <span
              className={styles.resume_title}
            >{`${firstName} ${lastName}'s resume`}</span>
            <span
              className={styles.resume_date}
            >{`Created: ${weekday}, ${day}, ${month} ${year} - ${time}`}</span>
          </div>
        </div>
        <div className={styles.personal_details}>
          <div className={styles.heading}>
            <span className={styles.heading_text} />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.name}`} />
            </div>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.phone}`} />
            </div>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.name}`} />
            </div>
          </div>
        </div>
        <div className={styles.personal_details}>
          <div className={styles.heading}>
            <span className={styles.heading_text} />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.name}`} />
            </div>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.phone}`} />
            </div>
            <div className={styles.details}>
              <span className={styles.label} />
              <span className={`${styles.info} ${styles.name}`} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResumeThumbnail;
{
  /* <div className={"resume_section"}>
        <h4>{`${firstName} ${lastName}'s Resume`}</h4>
      </div> 
      
      className={`${styles.thumbnail_container} ${styles.resume_card}`}
      
      */
}
