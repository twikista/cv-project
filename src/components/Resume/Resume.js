import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import EducationList from "./EducationList";
import EmploymentList from "./EmploymentList";
import EditResumeForm from "../Form/EditResumeForm";
import styles from "./Resume.module.css";

const Resume = (
  {
    lastAddedResume,
    resumes,
    isPreview,
    editedResumeSubmitHandler,
    deleteResumeHandler,
  },
  props
) => {
  const [isEditing, setIsEditing] = useState(false);
  const { resumeId } = useParams();
  const navigate = useNavigate();
  let clickedResume;
  if (resumes) clickedResume = resumes.find((i) => i.id === resumeId);

  const editStateToggler = () => {
    setIsEditing((prevState) => !prevState);
  };

  const contentToRender = isPreview ? (
    <section className={styles.resume_render}>
      <div className={styles.resume_wrapper}>
        <div className={styles.resume_content}>
          <PersonalDetails data={lastAddedResume.basicDetails} />
          <EducationList data={lastAddedResume.education} />
          <EmploymentList data={lastAddedResume.experience} />
        </div>
      </div>
      <nav className={styles.resume_tools}>
        <button className={styles.edit_btn}>Edit</button>
      </nav>
    </section>
  ) : (
    <section className={styles.resume_render}>
      <div className={styles.resume_wrapper}>
        <div className={styles.resume_content}>
          <PersonalDetails data={clickedResume.basicDetails} />
          <EducationList data={clickedResume.education} />
          <EmploymentList data={clickedResume.experience} />
        </div>
      </div>
      <div className={styles.resume_tools}>
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
      </div>
    </section>
  );

  return (
    <>
      {isEditing ? (
        <EditResumeForm
          editedResumeSubmitHandler={editedResumeSubmitHandler}
          editStateToggler={editStateToggler}
          clickedResume={clickedResume}
          isEditing={isEditing}
          {...props}
        />
      ) : (
        contentToRender
      )}
    </>
  );
};
export default Resume;
