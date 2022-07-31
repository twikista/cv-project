import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Resume from "./Resume";
import styles from "./RenderResume.module.css";
import ResumeDashBoard from "./ResumeDashboard";
import ResumeToDwomload from "./ResumeToDownload";
const RenderResume = (
  {
    lastAddedResume,
    resumes,
    isPreview,
    editedResumeSubmitHandler,
    deleteResumeHandler,
  },
  props
) => {
  const pdfRef = useRef();
  const mainContentToRender = isPreview ? (
    <Resume
      lastAddedResume={lastAddedResume}
      editedResumeSubmitHandler={editedResumeSubmitHandler}
      isPreview={isPreview}
    />
  ) : (
    <Resume
      resumes={resumes}
      editedResumeSubmitHandler={editedResumeSubmitHandler}
      isPreview={isPreview}
    />
  );

  const contentToDownload = isPreview ? (
    <ResumeToDwomload
      lastAddedResume={lastAddedResume}
      isPreview={isPreview}
      ref={pdfRef}
    />
  ) : (
    <ResumeToDwomload resumes={resumes} isPreview={isPreview} ref={pdfRef} />
  );

  return (
    <section className={styles.resume_render}>
      {mainContentToRender}
      <div style={{ display: "none" }}>{contentToDownload}</div>
      <ResumeDashBoard {...props}>
        <ReactToPrint
          trigger={() => <button>download</button>}
          content={() => pdfRef.current}
        />
      </ResumeDashBoard>
    </section>
  );
};

export default RenderResume;
