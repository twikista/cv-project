import React, { Component } from "react";
import AddFormItemBtn from "./AddFormItemBtn";

import EmploymentDetailsInputs from "./EmploymentDetailsInputs";
import FormContent from "../layout/FormContent";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import { MdOutlineWorkOutline } from "react-icons/md";

class EmploymentDetailsForm extends Component {
  state = {
    active: 0,
  };

  activeItemToggler = (index) => {
    // if (index === this.state.active) {
    //   return this.setState({ active: "0" });
    // }
    this.setState({ active: index });
  };

  onChangeHandler = (index) => (e, val) => {
    const { name, value } = e.target;
    const data = [...this.props.value];
    data[index][name] = value;
    this.props.handler(e, data);
  };

  render() {
    console.log(this.props.value);
    return (
      <div>
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
              active={this.state.active === index}
              activeItemToggler={this.activeItemToggler}
            />
          ))}
          <AddFormItemBtn
            value={this.props.value}
            addFormItemHandler={this.props.addFormItemHandler}
            text="Add Employment Details"
            activeItemToggler={this.activeItemToggler}
          />
        </FormContent>
        <FormFooter
          step={this.props.step}
          next={this.props.next}
          previous={this.props.previous}
          resetHandler={this.props.resetHandler}
          submitHandler={this.props.submitHandler}
          {...this.props}
        />
      </div>
    );
  }
}

export default EmploymentDetailsForm;
