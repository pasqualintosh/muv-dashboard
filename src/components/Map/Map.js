import React, { Component } from "react";
import { Map, TileLayer, Polyline } from "react-leaflet";
import * as routesId from "./../../data/allroute.json";
import * as allTrip from "./../../data/alltrip.json";
import "./Map.css";

let start_point = [0, 0];
let route_array_polyline = null;

let route_array_with_gps = routesId.default.map((e) => {
  return allTrip.default
    .filter((trip) => trip.route_id === e.id)
    .map((el, index) => {
      if (index === 50) start_point = [el.lat, el.lon];
      return [el.lat, el.lon];
    });
});

route_array_polyline = route_array_with_gps.map((el, index) => {
  return (
    <Polyline
      key={index}
      color={"#" + (((1 << 24) * Math.random()) | 0).toString(16)}
      positions={el}
    />
  );
});

class MapComponent extends Component {
  render() {
    return (
      <Map center={start_point} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {route_array_polyline ? route_array_polyline : <div />}
      </Map>
    );
  }
}

export default MapComponent;
