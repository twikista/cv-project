import React, { Component } from "react";
import FormContent from "../layout/FormContent";

class BasicDetails extends Component {
  onChangeHandler = (field) => (e) => {
    const data = { ...this.props.value };
    data[field] = e.target.value;
    this.props.handler(e, data);
  };

  render() {
    const { firstName, lastName, email, phone } = this.props.value;
    return (
      <FormContent>
        <label htmlFor="firstname" style={{ display: "block" }}>
          <input
            type="text"
            className="firstname"
            id="firstname"
            placeholder="First Name"
            value={firstName}
            onChange={this.onChangeHandler("firstName")}
            autoComplete="off"
          />
        </label>
        <label htmlFor="lastname" style={{ display: "block" }}>
          <input
            type="text"
            className="lastname"
            id="lastname"
            placeholder="Last Name"
            value={lastName}
            onChange={this.onChangeHandler("lastName")}
            autoComplete="off"
          />
        </label>
        <label htmlFor="email" style={{ display: "block" }}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={this.onChangeHandler("email")}
            autoComplete="off"
          />
        </label>
        <label htmlFor="phone" style={{ display: "block" }}>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={this.onChangeHandler("phone")}
            autoComplete="off"
          />
        </label>
      </FormContent>
    );
  }
}

export default BasicDetails;
