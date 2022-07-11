import React, { Component } from "react";
import BasicDetails from "./BasicDetails";
import EducationDetails from "./EdcuationDetails";
import ExperienceDetails from "./ExperienceDetails";
import FormFooter from "./FormFooter";
import styles from "./Form.module.css";
import uniqid from "uniqid";
import FormHeader from "./FormHeader";

class Form extends Component {
  initialState = {
    step: 1,
    basicDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    education: [
      {
        id: uniqid(),
        school: "",
        qualification: "",
        duration: "",
      },
    ],
    experience: [
      {
        id: uniqid(),
        company: "",
        role: "",
        period: "",
      },
    ],
  };

  state = {
    step: 1,
    basicDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    education: [
      {
        id: uniqid(),
        school: "",
        qualification: "",
        duration: "",
      },
    ],
    experience: [
      {
        id: uniqid(),
        company: "",
        role: "",
        period: "",
      },
    ],
  };

  onChangeHandler = (field) => (e, val) => {
    const data = { ...this.state };
    data[field] = val;
    this.setState((prevState) => ({ ...prevState, ...data }));
  };

  addFormItemHandler = (field) => {
    const data = { ...this.state };
    field === "education"
      ? (data[field] = [
          ...data[field],
          { id: uniqid(), school: "", qualification: "", duration: "" },
        ])
      : (data[field] = [
          ...data[field],
          { id: uniqid(), company: "", role: "", period: "" },
        ]);
    this.setState((prevState) => ({ ...prevState, ...data }));
  };

  removeFormitemHandler = (id, field) => {
    const data = { ...this.state };
    data[field] = data[field].filter((item) => item.id !== id);
    this.setState((prevState) => ({ ...prevState, ...data }));
  };

  resetFormHandler = () => {
    const data = { ...this.stata };
    data = this.initialState;
    this.setState(data);
  };

  next = () => {
    this.state((prevState) => ({ step: prevState.step + 1 }));
  };

  previous = () => {
    this.state((prevState) => ({ step: prevState.step - 1 }));
  };

  render() {
    const step = this.state.step;
    let contentToRender;
    if (step === 1) {
      contentToRender = (
        <>
          <FormHeader heading="Basic Details" />
          <BasicDetails
            value={this.state.basicDetails}
            handler={this.onChangeHandler("basicDetails")}
          />
          <FormFooter
            step={this.state.step}
            next={this.next}
            previous={this.previous}
            resetHandler={this.resetHandler}
          />
        </>
      );
    } else if (step === 2) {
      contentToRender = (
        <>
          <FormHeader heading="Education Details" />
          <div className="wrapper">
            <EducationDetails
              value={this.state.education}
              handler={this.onChangeHandler("education")}
              addHandler={() => this.addHandler("education")}
              removeHandler={this.removeHandler}
            />
            <FormFooter
              step={this.state.step}
              next={this.next}
              previous={this.previous}
              resetHandler={this.resetHandler}
            />
          </div>
        </>
      );
    } else if (step === 3) {
      contentToRender = (
        <>
          <FormHeader heading="Experience Details" />
          <div className="wrapper">
            <ExperienceDetails
              value={this.state.experience}
              handler={this.onChangeHandler("experience")}
              addHandler={this.addHandler}
              removeHandler={this.removeHandler}
            />
            <FormFooter
              step={this.state.step}
              next={this.next}
              previous={this.previous}
              resetHandler={this.resetHandler}
            />
          </div>
        </>
      );
    }

    return <div className={styles.form}>{contentToRender}</div>;
  }
}

export default Form;
