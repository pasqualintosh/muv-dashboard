import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { json_Smartworking_1 } from "./../../data/smartworking";
import axios from "axios";
var osmtogeojson = require("osmtogeojson");

export default class SimpleExample extends Component {
  state = {
    lat: json_Smartworking_1.features[0].geometry.coordinates[1],
    lng: json_Smartworking_1.features[0].geometry.coordinates[0],
    zoom: 5,
    position_ghella: {
      lat: 41.9135313,
      lon: 12.4623531,
    },
  };

  handleClick(position) {
    console.log("object");
    let api = "https://overpass.kumi.systems/api/interpreter",
      random = getRandomIntInclusive(0, 15);

    // if (random === 1) {
    //   api = "https://lz4.overpass-api.de/api/interpreter";
    // } else if (random === 2) {
    //   api = "https://z.overpass-api.de/api/interpreter";
    // } else if (random === 3) {
    //   api = "https://overpass-api.de/api/interpreter";
    // }

    let url_tpl = `${api}?data=%5Bout%3Ajson%5D%5Btimeout%3A100%5D%3B%28relation%5B%22type%22%3D%22route%22%5D%5B%22route%22%3D%22bus%22%5D%28
    ${this.state.position_ghella.lat}%2C${this.state.position_ghella.lon}%2C${position.lat}%2C${position.lon}%29%3Brelation%5B%22type%22%3D%22route%22%5D%5B%22route%22%3D%22tram%22%5D%28
    ${this.state.position_ghella.lat}%2C${this.state.position_ghella.lon}%2C${position.lat}%2C${position.lon}%29%3B%29%3Bout%3B%3E%3Bout%20skel%20qt%3B%0A`;

    // let url_tpl = `${api}?data=%5Bout%3Ajson%5D%5Btimeout%3A100%5D%3B%28relation%5B%22type%22%3D%22route%22%5D%5B%22route%22%3D%22bus%22%5D%28
    // ${position.lat}%2C${position.lon}%2C${position.lat}%2C${position.lon}%29%3Brelation%5B%22type%22%3D%22route%22%5D%5B%22route%22%3D%22tram%22%5D%28
    // ${position.lat}%2C${position.lon}%2C${position.lat}%2C${position.lon}%29%3B%29%3Bout%3B%3E%3Bout%20skel%20qt%3B%0A`;

    console.log(url_tpl);

    axios
      .get(url_tpl)
      .then(function (response) {
        // handle success
        console.log(response);
        let data = osmtogeojson(response.data);
        console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  renderMarkers() {
    const features = json_Smartworking_1.features;
    return features.map((f, i) => {
      if (f.geometry)
        return (
          <Marker
            key={i}
            position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}
            onclick={() =>
              this.handleClick({
                lat: f.geometry.coordinates[1],
                lon: f.geometry.coordinates[0],
              })
            }
          >
            <Popup>
              A pretty CSS3 popup. <hr /> Easily customizable.
            </Popup>
          </Marker>
        );
      else return <div key={i} />;
    });
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* 
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <hr /> Easily customizable.
          </Popup>
        </Marker> 
        */}
        {this.renderMarkers()}
      </Map>
    );
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
