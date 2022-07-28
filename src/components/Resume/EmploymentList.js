import React, { Component } from "react";
import EmploymentItem from "./EmploymentItem";
import styles from "./EmploymentList.module.css";

class EmploymentList extends Component {
  render() {
    return (
      <article className={styles.employment_details}>
        <table className={styles.details_table}>
          <thead>
            <tr>
              <th className={styles.heading} colSpan="2">
                Employment
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item) => (
              <EmploymentItem key={item.id} data={item} />
            ))}
          </tbody>
        </table>
      </article>
    );
  }
}

export default EmploymentList;
