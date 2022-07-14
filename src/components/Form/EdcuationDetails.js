import React, { Component } from "react";
import FormContent from "../layout/FormContent";
import AddFormItemBtn from "./AddFormItemBtn";

class Education extends Component {
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
          <article className="formfields" key={item.id}>
            {this.props.value.length - 1 !== 0 && (
              <div className="remove-wrapper">
                <button
                  className="removebtn"
                  onClick={() => {
                    this.props.removeFormItemHandler(item.id, "education");
                  }}
                >
                  - Remove
                </button>
              </div>
            )}
            <label htmlFor="school" style={{ display: "block" }} />
            <input
              type="text"
              id="school"
              name="school"
              value={item.school}
              onChange={this.handler(index)}
              placeholder="Name of Institution"
            />
            <label htmlFor="qualification" style={{ display: "block" }} />
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={item.qualification}
              onChange={this.handler(index)}
              placeholder="Qualification"
            />
            <label htmlFor="duration" style={{ display: "block" }} />
            <input
              type="text"
              id="duration"
              name="duration"
              value={item.duration}
              onChange={this.handler(index)}
              placeholder="Duration"
            />
          </article>
        ))}
        <AddFormItemBtn
          value={this.props.value}
          addFormItemHandler={this.props.addFormItemHandler}
          text="Add Education Details"
        />
      </FormContent>
    );
  }
}

export default Education;
