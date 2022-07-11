import React, { Component } from "react";

class FormFooter extends Component {
  render() {
    const { step, next, previous, resetHandler } = this.props;
    return (
      <div className="form-footer">
        <nav className="form-navigation">
          {step > 1 && (
            <button className="prevbtn" onClick={previous}>
              Previous
            </button>
          )}
          {step < 3 ? (
            <button className="nextbtn" onClick={next}>
              Next
            </button>
          ) : (
            <button className="submit-btn">Submit</button>
          )}
        </nav>
        <div className="resetform">
          <button className="reset-btn" onClickCapture={resetHandler}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default FormFooter;
