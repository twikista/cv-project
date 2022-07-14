import React, { Component } from "react";
import styles from "./Main.module.css";
import Form from "../components/Form/Form";

class Main extends Component {
  render() {
    return (
      <main className={styles.mainContentWrapper}>
        <Form appDataStoreHandler={this.props.appDataStoreHandler} />
      </main>
    );
  }
}

export default Main;
