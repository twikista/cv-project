import React, { Component } from "react";
import styles from "./BasicDetails.module.css";

class BasicDetails extends Component {
  onChangeHandler = (field) => (e) => {
    const data = { ...this.props.value };
    data[field] = e.target.value;
    this.props.handler(e, data);
  };

  render() {
    const { firstName, lastName, email, phone } = this.props.value;
    return (
      <div className="inputs">
        <div className="inputs">
          <label htmlFor="firstname" style={{ display: "block" }}>
            <input
              type="text"
              firstname="firstname"
              id="firstname"
              placeholder="First Name"
              value={firstName}
              onChange={this.onChangeHandler("firstName")}
            />
          </label>
          <label htmlFor="lastname" style={{ display: "block" }}>
            <input
              type="text"
              firstname="lastname"
              id="lastname"
              placeholder="Last Name"
              value={lastName}
              onChange={this.onChangeHandler("lastName")}
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
            />
          </label>
        </div>
      </div>
    );
  }
}

export default BasicDetails;
