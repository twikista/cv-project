import React, { Component } from "react";
import styles from "./NewResumeForm.module.css";
import uniqid from "uniqid";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationDetailsForm from "./EducationDetailsForm";
import EmploymentDetailsForm from "./EmploymentDetailsForm";

class EditResumeForm extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      ...this.props.clickedResume,
      step: 1,
    };

    this.state = this.initialState;
  }

  onChangeHandler = (field) => (e, val) => {
    const data = { ...this.state };
    data[field] = val;
    this.setState((prevState) => ({ ...prevState, ...data }));
    console.log(this.state);
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

  removeFormItemHandler = (id, field) => {
    const data = { ...this.state };
    data[field] = data[field].filter((item) => item.id !== id);
    this.setState((prevState) => ({ ...prevState, ...data }));
  };

  resetFormHandler = () => {
    this.setState({
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
      skills: [],
    });
  };

  next = () => {
    this.setState((prevState) => ({ step: prevState.step + 1 }));
    console.log(this.props);
  };

  previous = () => {
    this.setState((prevState) => ({ step: prevState.step - 1 }));
  };

  render() {
    const { step } = this.state;
    const { editedResumeSubmitHandler, editStateToggler } = this.props;
    let contentToRender;
    if (step === 1) {
      contentToRender = (
        <PersonalDetailsForm
          value={this.state.basicDetails}
          handler={this.onChangeHandler("basicDetails")}
          step={step}
          next={this.next}
          previous={this.previous}
          resetHandler={this.resetFormHandler}
        />
      );
    } else if (step === 2) {
      contentToRender = (
        <EducationDetailsForm
          value={this.state.education}
          handler={this.onChangeHandler("education")}
          addFormItemHandler={() => this.addFormItemHandler("education")}
          removeFormItemHandler={this.removeFormItemHandler}
          step={step}
          next={this.next}
          previous={this.previous}
          resetHandler={this.resetFormHandler}
        />
      );
    } else if (step === 3) {
      contentToRender = (
        <EmploymentDetailsForm
          value={this.state.experience}
          handler={this.onChangeHandler("experience")}
          addFormItemHandler={this.addFormItemHandler}
          removeFormItemHandler={this.removeFormItemHandler}
          step={step}
          next={this.next}
          previous={this.previous}
          resetHandler={this.resetFormHandler}
          editedResumeSubmitHandler={editedResumeSubmitHandler}
          editStateToggler={editStateToggler}
          resume={this.state}
          isEditing={this.props.isEditing}
        />
      );
    }

    return <div className={styles.form}>{contentToRender}</div>;
  }
}

export default EditResumeForm;
