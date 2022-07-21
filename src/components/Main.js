import React, { Component } from "react";
import styles from "./Main.module.css";
// import NewResumeForm from "./Form/NewResumeForm";
// import Resume from "./Resume";

class Main extends Component {
  render() {
    return (
      <main className={styles.mainContentWrapper}>{this.props.children}</main>
    );
  }
}

export default Main;
