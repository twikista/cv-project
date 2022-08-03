import React, { forwardRef } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationList from "./EducationList";
import EmploymentList from "./EmploymentList";
import styles from "./ResumeToDownload.module.css";

const ResumeToDownload = forwardRef((props, ref) => {
  const { clickedResume } = props;
  const contentToDownload = (
    <div className={styles.resume_wrapper} ref={ref}>
      <div className={styles.resume_content}>
        <PersonalDetails data={clickedResume.basicDetails} />
        <EducationList data={clickedResume.education} />
        <EmploymentList data={clickedResume.experience} />
      </div>
    </div>
  );

  return contentToDownload;
});
export default ResumeToDownload;
