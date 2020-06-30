import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class RouteWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.isPrivate && !this.props.userState.logged) {
      return <Redirect to="/login" />;
    }

    if (!this.props.isPrivate && this.props.userState.logged) {
      return <Redirect to="/dashboard" />;
    }
    return <Route props={{ ...this.props }} component={this.props.component} />;
  }
}

const withData = connect((state) => {
  return {
    userState: state.user,
  };
});

export default withData(RouteWrapper);
