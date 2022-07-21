import React, { Component } from "react";
import AddFormItemBtn from "./AddFormItemBtn";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import EducationDeatilsFormInputs from "./EducationDetailsFormInputs";
import FormContent from "../layout/FormContent";
import { TbSchool } from "react-icons/tb";

class EducationDetailsForm extends Component {
  onChangeHandler = (index) => (e, val) => {
    const { name, value } = e.target;
    const data = [...this.props.value];
    data[index][name] = value;
    this.props.handler(e, data);
  };
  render() {
    return (
      <>
        <FormHeader heading="Education Details">
          <TbSchool />
        </FormHeader>
        <FormContent>
          {this.props.value.map((item, index) => (
            <EducationDeatilsFormInputs
              key={item.id}
              item={item}
              index={index}
              value={this.props.value}
              onChangeHandler={this.onChangeHandler}
              removeFormItemHandler={this.props.removeFormItemHandler}
              field="education"
            />
          ))}
          <AddFormItemBtn
            value={this.props.value}
            addFormItemHandler={this.props.addFormItemHandler}
            text="Add Education Details"
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

export default EducationDetailsForm;
