import React, { Component } from "react";

class EducationItem extends Component {
  render() {
    const { duration, qualification, school } = this.props.data;
    return (
      <tr>
        <td className={"label"}>{duration}</td>
        <td
          className={"info"}
          // style={{
          //   width: "60%",
          //   verticalAlign: "top",
          //   paddingBottom: "5px",
          //   textAlign: "right",
          // }}
        >
          <span className="qualification" style={{ fontWeight: "600" }}>
            {qualification}
          </span>
          <span className="school" style={{ display: "block" }}>
            {school}
          </span>
        </td>
      </tr>
    );
  }
}

export default EducationItem;
