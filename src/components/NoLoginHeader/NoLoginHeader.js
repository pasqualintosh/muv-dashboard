import React, { Component } from "react";

class NoLoginHeader extends Component {
  render() {
    return (
      <header>
        <a href="#default">CompanyLogo</a>
        <nav>
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </nav>
      </header>
    );
  }
}

export default NoLoginHeader;
