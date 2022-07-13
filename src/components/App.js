import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
