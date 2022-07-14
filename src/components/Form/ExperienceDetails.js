import React, { Component } from "react";
import FormContent from "../layout/FormContent";

class ExperienceInfo extends Component {
  handler = (index) => (e, value) => {
    const { name } = e.target;
    const data = [...this.props.value];
    data[index][name] = value;
    this.props.onChangeHandler(e, data);
    console.log(this.props);
  };

  render() {
    return (
      <FormContent>
        {this.props.value.map((item, index) => (
          <article className="experience" key={item.id} id={item.id}>
            {this.props.value.length - 1 !== 0 && (
              <div className="remove-wrapper">
                <button
                  className="removebtn"
                  onClick={() => {
                    this.props.removeFormItemHandler(item.id, "experience");
                  }}
                >
                  - Remove
                </button>
              </div>
            )}

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
        {this.props.value.length < 4 && (
          <div className="addbtnwrapper">
            <button onClick={() => this.props.addFormItemHandler("experience")}>
              + Add Experience details
            </button>
          </div>
        )}
      </FormContent>
    );
  }
}

export default ExperienceInfo;
