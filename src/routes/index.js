import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Welcome from "./../screens/Welcome/Welcome";
import Login from "./../screens/Login/Login";
import RouteWrapper from "./Route";
import Charts from "./../screens/Charts/Charts";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <RouteWrapper path="/" isPrivate={true} exact component={Welcome} />
        <RouteWrapper path="/login" exact component={Login} />
        <RouteWrapper path="/charts" exact component={Charts} />
      </Switch>
    );
  }
}

export default Routes;
