import React, { Component } from "react";
import { connect } from "react-redux";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    console.log(this.props);
    return <div> textInComponent </div>;
  }
}

const withData = connect((state) => {
  return {
    userState: state.user,
  };
});

export default withData(Welcome);

// export default Welcome;
