import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import NewResumeForm from "./Form/NewResumeForm";
import Resume from "./Resume/Resume";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import uniqid from "uniqid";
import ResumeThumbnails from "./Resume/ResumeThumbnails";
import WelcomePage from "./WelcomePage";
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
    setResumes((prevState) => [
      ...prevState,
      { id: uniqid(), time: new Date().getTime(), ...formData },
    ]);
    togglePreview(true);
    console.log("clicked");
    console.log(resumes);
  };

  const togglePreview = (newState) => {
    setIsPreview(newState);
  };

  return (
    <div className={"app"}>
      <Header />
      <Main>
        <Routes>
          {resumes.length === 0 ? (
            <Route path="/" element={<WelcomePage />} />
          ) : (
            <Route
              path="/"
              element={
                <ResumeThumbnails
                  resumes={resumes}
                  togglePreview={togglePreview}
                />
              }
            />
          )}
          <Route
            path="new-resume"
            element={<NewResumeForm submitHandler={submitHandler} />}
          />
          {isPreview ? (
            <Route
              path={"/preview-resume"}
              element={
                <Resume
                  lastAddedResume={resumes[resumes.length - 1]}
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

/*
const getPageMargins = () => {
  return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
};

<style>{getPageMargins()}</style>
*/
