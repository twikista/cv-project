import React from "react";
import { useParams } from "react-router-dom";
import PersonalDetails from "./Resume/PersonalDetails";
import EducationList from "./Resume/EducationList";
import EmploymentList from "./Resume/EmploymentList";
import styles from "./Resume.module.css";

const Resume = ({ lastAddedResume, resumes, isPreview }) => {
  const { resumeId } = useParams();
  console.log(resumes, resumeId, isPreview, lastAddedResume);
  const clickedResume = resumes.find((i) => i.id === resumeId);
  const contentToRender = isPreview ? (
    <section className={styles.resume_wrapper}>
      <div className={styles.resume_content}>
        <PersonalDetails data={lastAddedResume.basicDetails} />
        <EducationList data={lastAddedResume.education} />
        <EmploymentList data={lastAddedResume.experience} />
      </div>
    </section>
  ) : (
    <section className={styles.resume_wrapper}>
      <div className={styles.resume_content}>
        <PersonalDetails data={clickedResume.basicDetails} />
        <EducationList data={clickedResume.education} />
        <EmploymentList data={clickedResume.experience} />
      </div>
    </section>
  );
  console.log(clickedResume.basicDetails);

  // const previewResume = (
  //   <section className={styles.resume_wrapper}>
  //     <div className={styles.resume_content}>
  //       <PersonalDetails data={lastAddedResume.basicDetails} />
  //       <EducationList data={lastAddedResume.education} />
  //       <EmploymentList data={lastAddedResume.experience} />
  //     </div>
  //   </section>
  // );

  // const viewResume = (
  //   <section className={styles.resume_wrapper}>
  //     <div className={styles.resume_content}>
  //       <PersonalDetails data={clickedResume.basicDetails} />
  //       <EducationList data={clickedResume.education} />
  //       <EmploymentList data={clickedResume.experience} />
  //     </div>
  //   </section>
  // );

  // const contentToRender = isPreview ? previewResume : viewResume;

  return contentToRender;
};

export default Resume;
