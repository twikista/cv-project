import React, { Component } from "react";
import BasicDetails from "./BasicDetails";
import EducationDetails from "./EdcuationDetails";
import ExperienceDetails from "./ExperienceDetails";
import FormFooter from "./FormFooter";
import styles from "./Form.module.css";
import uniqid from "uniqid";
import FormHeader from "./FormHeader";
import { BiUser } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationDetailsForm from "./EducationDetailsForm";
import EmploymentDetailsForm from "./EmploymentDetailsForm";

class Form extends Component {
  initialState = {
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

  removeFormItemHandler = (id, field) => {
    const data = { ...this.state };
    data[field] = data[field].filter((item) => item.id !== id);
    this.setState((prevState) => ({ ...prevState, ...data }));
  };

  resetFormHandler = () => {
    // let data = { ...this.state };
    // data = this.initialState;
    this.setState({
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
    });
    this.props.resetHandler();
  };

  /* next = () => {
    this.setState((prevState) => ({ step: prevState.step + 1 }));
  };

  previous = () => {
    this.setState((prevState) => ({ step: prevState.step - 1 }));
  };*/

  render() {
    // const step = this.props.step;
    let contentToRender;
    if (this.props.step === 1) {
      contentToRender = (
        <PersonalDetailsForm
          value={this.state.basicDetails}
          handler={this.onChangeHandler("basicDetails")}
          step={this.props.step}
          next={this.props.next}
          previous={this.props.previous}
          resetHandler={this.resetFormHandler}
        />
        // <>
        //   <FormHeader heading="Basic Details">
        //     <BiUser />
        //   </FormHeader>
        //   <BasicDetails
        //     value={this.state.basicDetails}
        //     handler={this.onChangeHandler("basicDetails")}
        //     next={this.props.next}
        //   />
        //   <FormFooter
        //     step={this.props.step}
        //     next={this.props.next}
        //     previous={this.props.previous}
        //     resetHandler={this.resetFormHandler}
        //   />
        // </>
      );
    } else if (this.props.step === 2) {
      contentToRender = (
        <EducationDetailsForm
          value={this.state.education}
          handler={this.onChangeHandler("education")}
          addFormItemHandler={() => this.addFormItemHandler("education")}
          removeFormItemHandler={this.removeFormItemHandler}
          step={this.props.step}
          next={this.props.next}
          previous={this.props.previous}
          resetHandler={this.resetFormHandler}
        />
        // <>

        //   <FormHeader heading="Education Details">
        //     <TbSchool />
        //   </FormHeader>
        //   <EducationDetails
        //     value={this.state.education}
        //     handler={this.onChangeHandler("education")}
        //     addFormItemHandler={() => this.addFormItemHandler("education")}
        //     removeFormItemHandler={this.removeFormItemHandler}
        //   />
        //   <FormFooter
        //     step={this.props.step}
        //     next={this.props.next}
        //     previous={this.props.previous}
        //     resetHandler={this.resetFormHandler}
        //   />
        // </>
      );
    } else if (this.props.step === 3) {
      contentToRender = (
        <EmploymentDetailsForm
          value={this.state.experience}
          handler={this.onChangeHandler("experience")}
          addFormItemHandler={this.addFormItemHandler}
          removeFormItemHandler={this.removeFormItemHandler}
          step={this.props.step}
          next={this.props.next}
          previous={this.props.previous}
          resetHandler={this.resetFormHandler}
          submitHandler={() => this.props.appDataStoreHandler(this.state)}
        />
        // <>

        //   <FormHeader heading="Employment Details">
        //     <MdOutlineWorkOutline />
        //   </FormHeader>
        //   <ExperienceDetails
        //     value={this.state.experience}
        //     handler={this.onChangeHandler("experience")}
        //     addFormItemHandler={this.addFormItemHandler}
        //     removeFormItemHandler={this.removeFormItemHandler}
        //   />
        //   <FormFooter
        //     step={this.props.step}
        //     next={this.props.next}
        //     previous={this.props.previous}
        //     resetHandler={this.resetFormHandler}
        //     appDataStoreHandler={() =>
        //       this.props.appDataStoreHandler(this.state)
        //     }
        //   />
        // </>
      );
    }

    return <div className={styles.form}>{contentToRender}</div>;
  }
}

export default Form;
