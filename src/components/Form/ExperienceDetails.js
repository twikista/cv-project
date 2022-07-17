import React, { Component } from "react";
import FormContent from "../layout/FormContent";
import AddFormItemBtn from "./AddFormItemBtn";
import RemoveFormItemBtn from "./RemoveFormItemBtn";

class ExperienceInfo extends Component {
  handler = (index) => (e, val) => {
    const { name, value } = e.target;
    const data = [...this.props.value];
    data[index][name] = value;
    this.props.handler(e, data);
  };

  render() {
    return (
      <FormContent>
        {this.props.value.map((item, index) => (
          <article className="experience" key={item.id}>
            <RemoveFormItemBtn
              value={this.props.value}
              removeFormItemHandler={this.props.removeFormItemHandler}
              item={item}
              field="experience"
            />

            <label htmlFor="company" style={{ display: "block" }} />
            <input
              type="text"
              id="company"
              name="company"
              value={item.company}
              onChange={this.handler(index)}
              placeholder="Company Name"
            />
            <label htmlFor="role" style={{ display: "block" }} />
            <input
              type="text"
              id="role"
              name="role"
              value={item.role}
              onChange={this.handler(index)}
              placeholder="Role"
            />
            <label htmlFor="period" style={{ display: "block" }} />
            <input
              type="text"
              id="period"
              name="period"
              value={item.period}
              onChange={this.handler(index)}
              placeholder="Period"
            />
          </article>
        ))}
        <AddFormItemBtn
          value={this.props.value}
          addFormItemHandler={this.props.addFormItemHandler}
          text="Add Employment Details"
        />
      </FormContent>
    );
  }
}

export default ExperienceInfo;
