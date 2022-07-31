import React, { forwardRef } from "react";
import { useParams } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import EducationList from "./EducationList";
import EmploymentList from "./EmploymentList";
import styles from "./ResumeToDownload.module.css";

const ResumeToDwomload = forwardRef((props, ref) => {
  const { lastAddedResume, resumes, isPreview } = props;
  const { resumeId } = useParams();
  let clickedResume;
  if (resumes) clickedResume = resumes.find((i) => i.id === resumeId);

  const contentToDownload = isPreview ? (
    <div className={styles.resume_wrapper} ref={ref}>
      <div className={styles.resume_content}>
        <PersonalDetails data={lastAddedResume.basicDetails} />
        <EducationList data={lastAddedResume.education} />
        <EmploymentList data={lastAddedResume.experience} />
      </div>
    </div>
  ) : (
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
export default ResumeToDwomload;
