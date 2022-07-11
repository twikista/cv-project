import React, { Component } from "react";

class Education extends Component {
  onFieldChange = (field) => (e, value, selectedKey) => {
    const data = { ...this.props.value };
    console.log(field);
    data[field] = e.target.value;
    this.props.onChange(e, data);
    console.log(data);
  };

  render() {
    const { school, qualification, period } = this.props.value;
    console.log(school);
    return (
      <div className="formcontrolwrappers">
        <label htmlFor="school">
          <input
            type="text"
            name="school"
            id="school"
            placeholder="Name of School"
            value={school}
            onChange={this.onFieldChange("school")}
          />
        </label>
        <label htmlFor="qualification">
          <input
            type="text"
            name="qualification"
            id="qualification"
            placeholder="Qualification Obtained"
            value={qualification}
            onChange={this.onFieldChange("qualification")}
          />
        </label>
        <label htmlFor="period">
          <input
            type="text"
            name="period"
            id="period"
            placeholder="Study period (ex:2015-2018)"
            value={period}
            onChange={this.onFieldChange("period")}
          />
        </label>
      </div>
    );
  }
}

export default Education;
