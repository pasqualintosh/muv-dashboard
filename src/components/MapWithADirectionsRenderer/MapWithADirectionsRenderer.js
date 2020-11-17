import React, { Component } from 'react';
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from "react-google-maps"
const google = window.google

export const MapWithADirectionsRenderer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCuAEprVH-lO3x-x9_3p4T7GI6F0_klJZE&v=3.exp&libraries=geometry,drawing,directions",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();

            console.log(this.props)

            DirectionsService.route({
                origin: new google.maps.LatLng(this.props.aCoordinates.lat, this.props.aCoordinates.lon),
                destination: new google.maps.LatLng(this.props.bCoordinates.lat, this.props.bCoordinates.lon),
                travelMode: google.maps.TravelMode.TRANSIT,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.props.handleChangeDirections(result.routes);

                    console.log(result)

                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)(props => {
    return (<GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng(props.centerCoordinates.lat, props.centerCoordinates.lon)}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>)
}

);
