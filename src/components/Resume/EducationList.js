import React, { Component } from "react";
import EducationItem from "./EducationItem";
import styles from "./EducationList.module.css";

class EducationList extends Component {
  render() {
    return (
      <article className={styles.education_details}>
        <table className={styles.details_table}>
          <thead>
            <tr>
              <th className={styles.heading} colSpan="2">
                Education
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item) => (
              <EducationItem key={item.id} data={item} />
            ))}
          </tbody>
        </table>
      </article>
    );
  }
}

export default EducationList;
