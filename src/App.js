import React, { Component } from "react";
import { Map, TileLayer, Polyline } from "react-leaflet";
import { Router } from "react-router-dom";
import history from "./services/history";
import Routes from "./routes/index";
import "./App.css";
import * as tripData from "./data/trip_149.json";

console.log(tripData.default);
let trip_149 = tripData.default.map((e) => {
  return [e.lat, e.lon];
});

console.log(trip_149);

const center = [51.505, -0.09];

const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderMap() {
    return (
      <Map center={trip_149[0]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline color="lime" positions={trip_149} />
      </Map>
    );
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}
