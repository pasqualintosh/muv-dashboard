import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
// import Welcome from "./../screens/Welcome/Welcome";
// import Login from "./../screens/Login/Login";
import RouteWrapper from "./Route";
import Charts from "./../screens/Charts/Charts";
import Ghella from "./../screens/Ghella/Ghella";
import GMap from "./../screens/GMap/GMap";
import RawData from "./../screens/RawData/RawData";
import TableData from "./../screens/TableData/TableData";
// import Palermo from "./../screens/Palermo/Palermo";

class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* <RouteWrapper path="/" isPrivate={true} exact component={Welcome} /> */}
        {/* <RouteWrapper path="/" exact component={Welcome} /> */}
        <RouteWrapper path="/" exact component={GMap} />
        <RouteWrapper path="/directions" exact component={GMap} />
        {/* <RouteWrapper path="/login" exact component={Login} /> */}
        <RouteWrapper path="/graph" exact component={Charts} />
        <RouteWrapper path="/tabledata" exact component={TableData} />
        <RouteWrapper path="/rawdata" exact component={RawData} />
        {/* <RouteWrapper path="/palermo" exact component={Palermo} /> */}
        {/* <RouteWrapper path="/maps" exact component={Ghella} /> */}
      </Switch>
    );
  }
}

export default Routes;
