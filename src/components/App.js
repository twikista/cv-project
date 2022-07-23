import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import NewResumeForm from "./Form/NewResumeForm";
import Resume from "./Resume";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import uniqid from "uniqid";
import ResumeThumbnails from "./Resume/ResumeThumbnails";
import "./App.css";

const App = () => {
  const storageKey = "resumes";
  const [resumes, setResumes] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? []
  );
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(resumes));
  }, [resumes]);

  const submitHandler = (formData) => {
    setResumes((prevState) => [...prevState, { id: uniqid(), ...formData }]);
  };

  const togglePreview = (newState) => {
    setIsPreview(newState);
  };

  /*const next = () => {
    setStep((prevState) => prevState + 1);
  };

  const previous = () => {
    setStep((prevState) => prevState - 1);
  };

  const resetHandler = () => {
    setStep(1);
  };*/
  const lastAddedResume = resumes[resumes.length - 1].basicDetails;
  return (
    <div className={"app"}>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <ResumeThumbnails
                resumes={resumes}
                togglePreview={togglePreview}
              />
            }
          />
          <Route
            path="new-resume"
            element={
              <NewResumeForm
                submitHandler={submitHandler}
                togglePreview={togglePreview}
              />
            }
          />
          {isPreview ? (
            <Route
              path={"preview-resume"}
              element={
                <Resume
                  lastAddedResume={lastAddedResume}
                  isPreview={isPreview}
                />
              }
            />
          ) : (
            <Route
              path="/resumes/:resumeId"
              element={<Resume resumes={resumes} isPreview={isPreview} />}
            />
          )}
        </Routes>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
