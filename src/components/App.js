import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  appDataStoreHandler = (val) => {
    this.setState({ ...val });
    // setAppData(val);
    console.log("App Data Store");
    console.log(this.state);
  };

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Main appDataStoreHandler={this.appDataStoreHandler} />
        <Footer />
      </div>
    );
  }
}

export default App;
