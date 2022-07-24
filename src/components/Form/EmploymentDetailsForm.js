import React, { Component } from "react";
import AddFormItemBtn from "./AddFormItemBtn";

import EmploymentDetailsInputs from "./EmploymentDetailsInputs";
import FormContent from "../layout/FormContent";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import { MdOutlineWorkOutline } from "react-icons/md";

class EmploymentDetailsForm extends Component {
  onChangeHandler = (index) => (e, val) => {
    const { name, value } = e.target;
    const data = [...this.props.value];
    data[index][name] = value;
    this.props.handler(e, data);
    console.log(data);
  };

  render() {
    return (
      <>
        <FormHeader heading="Employment Details">
          <MdOutlineWorkOutline />
        </FormHeader>
        <FormContent>
          {this.props.value.map((item, index) => (
            <EmploymentDetailsInputs
              key={item.id}
              item={item}
              index={index}
              value={this.props.value}
              onChangeHandler={this.onChangeHandler}
              removeFormItemHandler={this.props.removeFormItemHandler}
              field="experience"
            />
          ))}
          <AddFormItemBtn
            value={this.props.value}
            addFormItemHandler={this.props.addFormItemHandler}
            text="Add Employment Details"
          />
        </FormContent>
        <FormFooter
          step={this.props.step}
          next={this.props.next}
          previous={this.props.previous}
          resetHandler={this.props.resetHandler}
          submitHandler={this.props.submitHandler}
        />
      </>
    );
  }
}

export default EmploymentDetailsForm;
