import React, { Component } from "react";
import { Map, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import * as routesId from "./../../data/allroute.json";
import * as allTrip from "./../../data/alltrip.json";
import "./Map.css";
import { smartworking } from "./../../data/smartworking"
import { bus_stop } from "./../../data/bus_stop"
import L from 'leaflet';

export const pointerIcon = new L.Icon({
    iconUrl: './../../assets/pointerIcon.svg',
    iconRetinaUrl: './../../assets/pointerIcon.svg',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    shadowUrl: './../../assets/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
});

export const suitcasePoint = new L.Icon({
    iconUrl: './../../assets/suitcaseIcon.svg',
    iconRetinaUrl: './../../assets/suitcaseIcon.svg',
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40],
    shadowUrl: './../../assets/marker-shadow.png',
    shadowSize: [29, 40],
    shadowAnchor: [7, 40],
});

const start_point = [smartworking.features[0].geometry.coordinates[1], smartworking.features[0].geometry.coordinates[0]];

class MapComponent extends Component {

    renderHumanMarkers() {
        return smartworking.features.map((e, index) => {
            if (e.geometry)
                return (
                    <Marker
                        position={[e.geometry.coordinates[1], e.geometry.coordinates[0]]}
                        key={index}
                        icon={pointerIcon}
                    >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>)
            else
                return <div key={index} />
        });
    }

    renderTPLMarkers() {
        return bus_stop.features.map((e, index) => {
            if (e.geometry)
                return (
                    <Marker
                        position={[e.geometry.coordinates[1], e.geometry.coordinates[0]]}
                        key={index}
                        icon={suitcasePoint}
                    >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>)
            else
                return <div key={index} />
        });
    }

    render() {
        return (
            <Map center={start_point} zoom={6}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {this.renderHumanMarkers()}
                {this.renderTPLMarkers()}
            </Map>
        );
    }
}

export default MapComponent;
