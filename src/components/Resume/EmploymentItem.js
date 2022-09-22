import React, { Component } from "react";

class EmploymentItem extends Component {
  render() {
    const { company, role, startMonth, startYear, endMonth, endYear, city } =
      this.props.data;
    return (
      <tr>
        <td className="label">{`${startMonth} ${startYear} - ${endMonth} ${endYear}`}</td>
        <td
          className="info"
          style={{ width: "60%", verticalAlign: "top", paddingBottom: "5px" }}
        >
          <span className="role" style={{ fontWeight: "600" }}>
            {role}
          </span>
          <span className="company" style={{ display: "block" }}>
            {company}
          </span>
          <span className="company" style={{ display: "block" }}>
            {city}
          </span>
        </td>
      </tr>
    );
  }
}

export default EmploymentItem;
