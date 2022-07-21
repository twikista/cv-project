import React, { Component } from "react";
import FormContent from "../layout/FormContent";
import PersonalDetailsFormInputs from "./PersonalDetailsFormInputs";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import { BiUser } from "react-icons/bi";

class PersonalDetailsForm extends Component {
  onChangeHandler = (field) => (e) => {
    const data = { ...this.props.value };
    data[field] = e.target.value;
    this.props.handler(e, data);
  };

  render() {
    return (
      <>
        <FormHeader heading="Basic Details">
          <BiUser />
        </FormHeader>
        <FormContent>
          <PersonalDetailsFormInputs
            value={this.props.value}
            onChangeHandler={this.onChangeHandler}
          />
        </FormContent>
        <FormFooter
          step={this.props.step}
          next={this.props.next}
          previous={this.props.previous}
          resetHandler={this.props.resetHandler}
        />
      </>
    );
  }
}

export default PersonalDetailsForm;
