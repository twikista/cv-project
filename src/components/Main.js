import React, { Component } from "react";
import styles from "./Main.module.css";
import Form from "../components/Form/Form";
import Resume from "./Resume";

class Main extends Component {
  render() {
    return (
      <main className={styles.mainContentWrapper}>
        {this.props.step < 4 ? (
          <Form
            appDataStoreHandler={this.props.appDataStoreHandler}
            step={this.props.step}
            next={this.props.next}
            previous={this.props.previous}
            resetHandler={this.props.resetHandler}
          />
        ) : (
          <Resume appData={this.props.appData} />
        )}
      </main>
    );
  }
}

export default Main;
