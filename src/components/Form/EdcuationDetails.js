import React, { Component } from "react";
import FormContent from "../layout/FormContent";

class Education extends Component {
  handler = (index) => (e, val) => {
    const { name, value } = e.target;
    const data = [...this.props.value];
    data[index][name] = value;
    this.props.handler(e, data);
  };

  render() {
    const { school, qualification, period } = this.props.value;
    return (
      <FormContent>
        <label htmlFor="school" style={{ display: "block" }}>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="Name of School"
            value={school}
            onChange={this.onFieldChange("school")}
          />
        </label>
        <label htmlFor="qualification" style={{ display: "block" }}>
          <input
            type="text"
            name="qualification"
            id="qualification"
            placeholder="Qualification Obtained"
            value={qualification}
            onChange={this.onFieldChange("qualification")}
          />
        </label>
        <label htmlFor="period" style={{ display: "block" }}>
          <input
            type="text"
            name="period"
            id="period"
            placeholder="Study period (ex:2015-2018)"
            value={period}
            onChange={this.onFieldChange("period")}
          />
        </label>
      </FormContent>
    );
  }
}

export default Education;
