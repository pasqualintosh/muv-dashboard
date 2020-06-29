import React, { Component } from "react";
import { Map, TileLayer, Polyline, GeoJSON } from "react-leaflet";
import { Spinner } from "react-bootstrap";
import * as walking_palermo_id from "./../../data/palermo.json";
import * as walking_palermo from "./../../data/walking_palermo.json";
import "./Map.css";

class MapComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      geo_json_initialited: false,
      geoJson: {},
    };

    this.start_point = [0, 0];
  }

  initFirstPromise() {
    this.route_array_with_gps = new Promise((resolve, reject) => {
      try {
        let data = walking_palermo_id.default.map((e) => {
          return {
            type: "Feature",
            properties: { modal_type: e.modal_type, id: e.id },
            geometry: {
              type: "LineString",
              coordinates: [
                ...walking_palermo.default
                  .filter((trip) => trip.route_id === e.id)
                  .map((el, index) => {
                    if (index === 50) this.start_point = [el.lat, el.lon];
                    return [el.lon, el.lat];
                  }),
              ],
            },
          };
        });
        resolve({
          data,
        });
      } catch (error) {
        reject({ error });
      }
    });
  }

  initSecondPromise() {
    this.route_array_polyline = new Promise((resolve, reject) => {
      try {
        resolve({
          data: this.state.route_array_with_gps.map((el, index) => {
            return (
              <Polyline
                key={index}
                color={"#" + (((1 << 24) * Math.random()) | 0).toString(16)}
                positions={el}
              />
            );
          }),
        });
      } catch (error) {
        reject({ error });
      }
    });
  }

  componentDidMount() {
    this.initFirstPromise();

    this.route_array_with_gps.then((d) => {
      this.setState({
        geo_json_initialited: true,
        geoJson: {
          type: "FeatureCollection",
          features: [...d.data],
        },
      });
      console.log(this.state);
    });
  }

  render() {
    if (this.state.geo_json_initialited)
      return (
        <Map center={this.start_point} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON
            data={this.state.geoJson}
            style={function (geoJsonFeature) {
              switch (geoJsonFeature.properties.modal_type) {
                case 1:
                  return { color: "#6CBA7E", weight: 5, opacity: 0.65 };
                case 2:
                  return { color: "#FAB21E", weight: 5, opacity: 0.65 };
                case 3:
                  return { color: "#BA0043", weight: 5, opacity: 0.65 };
                case 4:
                  return { color: "#BA0043", weight: 5, opacity: 0.65 };
                case 5:
                  return { color: "#BA0043", weight: 5, opacity: 0.65 };
                case 6:
                  return { color: "#BA0043", weight: 5, opacity: 0.65 };
                default:
                  return { color: "#6CBA7E", weight: 5, opacity: 0.65 };
              }
            }}
          />
        </Map>
      );
    else return <Spinner animation="border" variant="primary" />;
  }
}

export default MapComponent;
