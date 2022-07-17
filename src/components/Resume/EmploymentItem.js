import React, { Component } from "react";

class EmploymentItem extends Component {
  render() {
    const { company, period, role } = this.props.data;
    return (
      <tr>
        <td
          className="label"
          style={{
            width: "30%",
            fontWeight: "600",
            verticalAlign: "top",
            paddingBottom: "5px",
          }}
        >
          {period}
        </td>
        <td
          style={{ width: "60%", verticalAlign: "top", paddingBottom: "5px" }}
        >
          <span className="role" style={{ fontWeight: "600" }}>
            {role}
          </span>
          <span className="company" style={{ display: "block" }}>
            {company}
          </span>
        </td>
      </tr>
    );
  }
}

export default EmploymentItem;
