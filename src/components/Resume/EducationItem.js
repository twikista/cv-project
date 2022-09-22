import React, { Component } from "react";

class EducationItem extends Component {
  render() {
    const {
      startMonth,
      startYear,
      endMonth,
      endYear,
      qualification,
      school,
      city,
    } = this.props.data;
    return (
      <tr>
        <td
          className={"label"}
        >{`${startMonth} ${startYear} - ${endMonth} ${endYear}`}</td>
        <td className={"info"}>
          <span className="qualification" style={{ fontWeight: "600" }}>
            {qualification}
          </span>
          <span className="school" style={{ display: "block" }}>
            {school}
          </span>
          <span className="school" style={{ display: "block" }}>
            {city}
          </span>
        </td>
      </tr>
    );
  }
}

export default EducationItem;
