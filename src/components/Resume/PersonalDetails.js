import React, { Component } from "react";
import styles from "./PersonalDetails.module.css";

class PersonalDetails extends Component {
  render() {
    const { firstName, lastName, email, phone } = this.props.data;
    return (
      <article className={styles.personal_details}>
        <table className={styles.details_table}>
          <thead>
            <tr>
              <th className={styles.heading} colSpan="2">
                Personal Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="label">Name</td>
              <td
                className="info"
                style={{ textTransform: "capitalize" }}
              >{`${firstName} ${lastName}`}</td>
            </tr>
            <tr>
              <td className="label">Email</td>
              <td className="info">{email}</td>
            </tr>
            <tr>
              <td className="label">Phone Number</td>
              <td className="info">{phone}</td>
            </tr>
          </tbody>
        </table>
      </article>
    );
  }
}

export default PersonalDetails;
