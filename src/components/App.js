import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styles from "./App.module.css";

const App = () => {
  const [appData, setAppData] = useState({});
  const [step, setStep] = useState(1);

  const appDataStoreHandler = (formData) => {
    setAppData((prevState) => ({ ...prevState, ...formData }));
  };

  const next = () => {
    setStep((prevState) => prevState + 1);
  };

  const previous = () => {
    setStep((prevState) => prevState - 1);
  };

  const resetHandler = () => {
    setStep(1);
    setAppData({});
  };

  return (
    <div className={styles.app}>
      <Header />
      <Main
        appDataStoreHandler={appDataStoreHandler}
        step={step}
        next={next}
        previous={previous}
        resetHandler={resetHandler}
        appData={appData}
      />
      <Footer />
    </div>
  );
};

export default App;
