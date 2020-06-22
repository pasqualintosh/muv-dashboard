import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Welcome from "./../screens/Welcome/Welcome";
import RouteWrapper from "./Route";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <RouteWrapper path="/" exact component={Welcome} />
      </Switch>
    );
  }
}

export default Routes;
