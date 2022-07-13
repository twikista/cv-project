import React, { Component } from "react";

class InputField extends Component {
  render() {
    return (
      <label htmlFor="firstname" style={{ display: "block" }}>
        <input
          type="text"
          className="firstname"
          id="firstname"
          placeholder="First Name"
          value={firstName}
          onChange={this.onChangeHandler("firstName")}
          autocomplete="off"
        />
      </label>
    );
  }
}

export default InputField;
