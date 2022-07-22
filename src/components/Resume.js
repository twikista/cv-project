import React, { Component } from "react";
import PersonalDetails from "./Resume/PersonalDetails";
import EducationList from "./Resume/EducationList";
import EmploymentList from "./Resume/EmploymentList";
import styles from "./Resume.module.css";

class Resume extends Component {
  render() {
    console.log(this.props);
    return (
      <section className={styles.resume_wrapper}>
        {/* <h2
          className={styles.section_heading}
        >{`${this.props.appData.basicDetails.firstName} ${this.props.appData.basicDetails.lastName}`}</h2> */}
        <div className={styles.resume_content}>
          <PersonalDetails data={this.props.resume.basicDetails} />
          <EducationList data={this.props.resume.education} />
          <EmploymentList data={this.props.resume.experience} />
        </div>
      </section>
    );
  }
}

export default Resume;
