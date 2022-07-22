import styles from "./ResumeThumbnail.module.css";
// import PersonalDetails from "./PersonalDetails";
// import EducationList from "./EducationList";
// import EmploymentList from "./EmploymentList";
import Resume from "../Resume";
const ResumeThumbnail = ({ resume }) => {
  const { firstName, lastName } = resume.basicDetails;
  console.log(resume);
  return (
    <div className={styles.thumbnail_container}>
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
    </div>
  );
};

export default ResumeThumbnail;

{
  /* <div className={"resume_section"}>
        <h4>{`${firstName} ${lastName}'s Resume`}</h4>
      </div> */
}
