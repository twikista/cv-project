import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import PersonalDetails from "./PersonalDetails";
import EducationList from "./EducationList";
import EmploymentList from "./EmploymentList";
import EditResumeForm from "../Form/EditResumeForm";
import ResumeDashBoard from "./ResumeDashboard";
import ResumeToDwomload from "./ResumeToDownload";
import styles from "./Resume.module.css";
import { FiDownload } from "react-icons/fi";

const Resume = (props) => {
  const {
    lastAddedResume,
    resumes,
    editedResumeSubmitHandler,
    deleteResumeHandler,
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const { resumeId } = useParams();
  const pdfRef = useRef();
  let clickedResume;
  resumes
    ? (clickedResume = resumes.find((i) => i.id === resumeId))
    : (clickedResume = lastAddedResume);

  const editStateToggler = () => {
    setIsEditing((prevState) => !prevState);
  };
  const contentToRender = (
    <div className={styles.resume_wrapper}>
      <div className={styles.resume_content}>
        <PersonalDetails data={clickedResume.basicDetails} />
        <EducationList data={clickedResume.education} />
        <EmploymentList data={clickedResume.experience} />
      </div>
    </div>
  );

  const contentToDownload = (
    <ResumeToDwomload clickedResume={clickedResume} ref={pdfRef} />
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
        <section className={styles.resume_render}>
          {contentToRender}
          <div style={{ display: "none" }}>{contentToDownload}</div>
          <ResumeDashBoard
            editStateToggler={editStateToggler}
            deleteResumeHandler={deleteResumeHandler}
            clickedResume={clickedResume}
          >
            <ReactToPrint
              trigger={() => (
                <button>
                  <FiDownload />
                </button>
              )}
              content={() => pdfRef.current}
            />
          </ResumeDashBoard>
        </section>
      )}
    </>
  );
};
export default Resume;
