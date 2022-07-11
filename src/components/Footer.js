import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="legal">
          <span className="copyright">&copy; 2022 </span>
          <span>Aaaron Anama</span>
        </div>
        <div className="socials">
          <ul>
            <li>Twitter</li>
            <li>GitHub</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
