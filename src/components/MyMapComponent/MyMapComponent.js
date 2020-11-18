import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { MapWithADirectionsRenderer } from "./../MapWithADirectionsRenderer/MapWithADirectionsRenderer"

export const MyMapComponent = compose(
    withProps({
        // googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCuAEprVH-lO3x-x9_3p4T7GI6F0_klJZE&v=3.exp&libraries=geometry,drawing,directions",
        // googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCuAEprVH-lO3x-x9_3p4T7GI6F0_klJZE&callback=initMap&libraries=&v=weekly",
        // src="https://maps.googleapis.com/maps/api/js?key=AIzaSyClCizTBE6cSHGG4dbhoK8O8cxHOknbX1s&callback=initMap&libraries=&v=weekly"
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
);

export class MyFancyComponent extends React.PureComponent {

    render() {
        return (
            <MapWithADirectionsRenderer
                centerCoordinates={this.props.centerCoordinates}
                aCoordinates={this.props.aCoordinates}
                bCoordinates={this.props.bCoordinates}
                handleTransitDirections={this.props.handleTransitDirections}
                handleDrivingDirections={this.props.handleDrivingDirections}
                isMarkerShown={true}
            />
        )
    }
}