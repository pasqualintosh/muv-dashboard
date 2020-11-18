import React, { Component, PureComponent } from 'react';
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from "react-google-maps"
import { precovid } from "./../../data/precovid";
import { MyMapComponent } from '../MyMapComponent/MyMapComponent';
// import { smartworking } from "./../../data/smartworking";
// import { bus } from "./../../data/bus";
// import { railway } from "./../../data/railway";
const google = window.google;
const polylineDriving = {
    polylineOptions: { strokeColor: "#3161AA" }
};
const polylineTransit = {
    polylineOptions: { strokeColor: "#F7B132" }
};
const start_point = [41.9136351, 12.462278];

class DirectionComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            directions: null,
            driving_directions: null,
        }
    }

    componentDidMount() { }

    handleMarkerClick = (e) => {
        const DirectionsService = new google.maps.DirectionsService();

        DirectionsService.route({
            origin: new google.maps.LatLng(e.geometry.coordinates[1], e.geometry.coordinates[0]),
            destination: new google.maps.LatLng(start_point[0], start_point[1]),
            travelMode: google.maps.TravelMode.TRANSIT,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.props.handleTransitDirections(result.routes);
                this.setState({
                    directions: result,
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });

        DirectionsService.route({
            origin: new google.maps.LatLng(e.geometry.coordinates[1], e.geometry.coordinates[0]),
            destination: new google.maps.LatLng(start_point[0], start_point[1]),
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.props.handleDrivingDirections(result.routes);
                this.setState({
                    driving_directions: result,
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    }

    renderHumanMarkers() {
        return precovid.features.map((e, index) => {
            if (e.geometry)
                return (
                    <Marker
                        key={index}
                        icon={{
                            url: './../../assets/person.svg',
                            anchor: new google.maps.Point(17, 46),
                            scaledSize: new google.maps.Size(20, 20)
                        }}
                        position={{ lat: e.geometry.coordinates[1], lng: e.geometry.coordinates[0] }}
                        onClick={() => { this.handleMarkerClick(e) }}
                    />
                );
            else return <div key={index} />;
        });
    }

    render() {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={new google.maps.LatLng(start_point[0], start_point[1])}
            >
                {this.state.directions && <DirectionsRenderer options={polylineTransit} directions={this.state.directions} />}
                {this.state.driving_directions && <DirectionsRenderer options={polylineDriving} directions={this.state.driving_directions} />}
                {this.props.isMarkerShown && this.renderHumanMarkers()}
                {this.props.isMarkerShown &&
                    <Marker
                        icon={{
                            url: './../../assets/business.svg',
                            anchor: new google.maps.Point(17, 46),
                            scaledSize: new google.maps.Size(37, 37)
                        }}
                        position={{ lat: start_point[0], lng: start_point[1] }} onClick={() => { }} />}
            </GoogleMap>
        )
    }
}



export const MapWithADirectionsRenderer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCuAEprVH-lO3x-x9_3p4T7GI6F0_klJZE&v=3.exp&libraries=geometry,drawing,directions",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(DirectionComponent);


