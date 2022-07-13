import React, { Component } from "react";

import uniqid from "uniqid";

class ExperienceInfo extends Component {
  exdChangeHandler = (index) => (e, value) => {
    const { name } = e.target;
    const data = [...this.props.value];
    data[index][name] = value;
    this.props.onChangeHandler(e, data);
    console.log(this.props);
  };

  render() {
    return (
      <div className="experience">
        <h2>Experience Detail</h2>
        {this.props.value.map((item, index) => (
          <div key={uniqid()} className="formcontrolwrappers">
            <label htmlFor="organization">
              <input
                type="text"
                name="organization"
                id="organization"
                placeholder="Name of organization"
                value={item.organization}
                onChange={this.exdChangeHandler(index)}
              />
            </label>
            <label htmlFor="jobRole">
              <input
                type="text"
                name="jobRole"
                id="jobRole"
                placeholder="Qualification Obtained"
                value={item.jobRole}
                onChange={this.exdChangeHandler(index)}
              />
            </label>
            <label htmlFor="duration">
              <input
                type="text"
                name="duration"
                id="duration"
                placeholder="Study period (ex:2015-2018)"
                value={item.duration}
                onChange={this.exdChangeHandler(index)}
              />
            </label>
          </div>
        ))}

        {/* <div className="alleducation">
          <h2>Educational History</h2>
          {this.state.educationList.map((educationItem, index) => {
            console.log(educationItem);
            return (
              <article key={uniqid()}>
                <div className="formcontrolwrappers">
                  <label htmlFor="school">
                    <input
                      type="text"
                      name="school"
                      id="school"
                      placeholder="Name of School"
                      // value={educationItem.school}
                      value={this.state.educationList[index].name}
                      onChange={(e) => this.onChangeHandler(e, index)}
                    />
                  </label>
                  <label htmlFor="qualification">
                    <input
                      type="text"
                      name="qualification"
                      id="qualification"
                      placeholder="Qualification Obtained"
                      value={this.state.educationList[index].name}
                      onChange={(e) => this.onChangeHandler(e, index)}
                    />
                  </label>
                  <label htmlFor="period">
                    <input
                      type="text"
                      name="period"
                      id="period"
                      placeholder="Study period (ex:2015-2018)"
                      value={this.state.educationList[index].name}
                      onChange={(e) => this.onChangeHandler(e, index)}
                    />
                  </label>
                </div>
              </article>
            );
          })}
        </div> */}
      </div>
    );
  }
}

export default ExperienceInfo;
