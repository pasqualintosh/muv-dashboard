import React, { Component, PureComponent } from 'react';
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker, InfoWindow } from "react-google-maps"
import { precovid } from "./../../data/precovid";
import { MyMapComponent } from '../MyMapComponent/MyMapComponent';
import { smartworking } from "./../../data/smartworking";
// import { bus } from "./../../data/bus";
// import { railway } from "./../../data/railway";

const google = window.google;
const start_point = [41.9136351, 12.462278];

class DirectionComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            directions: null,
            driving_directions: null,
            show_info: false,
            info_pos: { lat: 0.0, lon: 0.0 },
            show_index: null,
            raw_name: [],
            raw_bike_data: [],
            raw_walk_data: [],
            raw_car_data: [],
            raw_tpl_data: [],
            spelling_directions: null,
            transit_names: null,
            transit_distance: [],
            transit_duration: [],
            spelling_driving_directions: null,
            driving_names: null,
            driving_distance: [],
            driving_duration: [],
            walking_names: null,
            walking_distance: [],
            walking_duration: [],
            biking_names: null,
            biking_distance: [],
            biking_duration: []
        }
    }

    componentDidMount() {

        // for (let index = 0; index < smartworking.features.length; index++) {
        for (let index = 124; index < 126; index++) {

            const e = smartworking.features[index];
            if (e.geometry) {
                let { raw_name } = this.state
                raw_name.push(smartworking.features[index].properties.nome_e_cog)

                console.log(e)

                this.handleMarkerClick(smartworking.features[index], index);

                this.setState({
                    raw_name: [...raw_name]
                })
            }

        }

    }

    handleMarkerClick = (e, index) => {
        const DirectionsService = new google.maps.DirectionsService();

        DirectionsService.route({
            origin: new google.maps.LatLng(e.geometry.coordinates[1], e.geometry.coordinates[0]),
            destination: new google.maps.LatLng(start_point[0], start_point[1]),
            travelMode: google.maps.TravelMode.TRANSIT,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.handleTransitDirections(result.routes);
            } else {
                console.error(`error fetching directions ${result}`);
                console.log(result)
                let { transit_distance, transit_duration } = this.state;
                transit_distance.push("null");
                transit_duration.push("null");
                this.setState({
                    transit_distance: [...transit_distance],
                    transit_duration: [...transit_duration],
                })
            }
        });

        DirectionsService.route({
            origin: new google.maps.LatLng(e.geometry.coordinates[1], e.geometry.coordinates[0]),
            destination: new google.maps.LatLng(start_point[0], start_point[1]),
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.handleDrivingDirections(result.routes);
            } else {
                console.error(`error fetching directions ${result}`);
                console.log(result)
                let { driving_distance, driving_duration } = this.state;
                driving_distance.push("null")
                driving_duration.push("null")
                this.setState({
                    driving_distance: [...driving_distance],
                    driving_duration: [...driving_duration],
                })
            }
        });

        DirectionsService.route({
            origin: new google.maps.LatLng(e.geometry.coordinates[1], e.geometry.coordinates[0]),
            destination: new google.maps.LatLng(start_point[0], start_point[1]),
            travelMode: google.maps.TravelMode.WALKING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.handleWalkingDirections(result.routes);
                this.handleBikingDirections(result.routes);
            } else {
                console.error(`error fetching directions ${result}`);
                console.log(result)
                let { walking_distance, walking_duration } = this.state;
                walking_distance.push("null")
                walking_duration.push("null")

                let { biking_distance, biking_duration } = this.state;
                biking_distance.push("null")
                biking_duration.push("null")


                this.setState({
                    biking_distance: [...biking_distance],
                    biking_duration: [...biking_duration],
                    walking_distance: [...walking_distance],
                    walking_duration: [...walking_duration],
                })
            }
        });

    }

    handleTransitDirections = (data = new Array()) => {
        let transit_names = [];
        let { transit_distance, transit_duration } = this.state;

        data[0].legs[0].steps.forEach(s => {
            if (s.travel_mode == "TRANSIT") {
                transit_names.push(s.transit.line.short_name)
            }
        })

        transit_distance.push(data[0].legs[0].distance.text.replace(",", "."))
        transit_duration.push(data[0].legs[0].duration.text.replace(",", "."))

        this.setState({
            spelling_directions: [...data],
            transit_names,
            transit_distance: [...transit_distance],
            transit_duration: [...transit_duration],
        })
    }

    handleDrivingDirections = (data = new Array()) => {
        let driving_names = []
        data[0].legs[0].steps.forEach(s => {
            if (s.travel_mode == "TRANSIT") {
                driving_names.push(s.transit.line.short_name)
            }
        })
        let { driving_distance, driving_duration } = this.state;
        driving_distance.push(data[0].legs[0].distance.text.replace(",", "."))
        driving_duration.push(data[0].legs[0].duration.text.replace(",", "."))
        this.setState({
            spelling_driving_directions: [...data],
            driving_names,
            driving_distance: [...driving_distance],
            driving_duration: [...driving_duration],
        })
    }

    handleWalkingDirections = (data = new Array()) => {
        let walking_names = []
        data[0].legs[0].steps.forEach(s => {
            if (s.travel_mode == "TRANSIT") {
                walking_names.push(s.transit.line.short_name)
            }
        })

        let { walking_distance, walking_duration } = this.state;
        walking_distance.push(data[0].legs[0].distance.text.replace(",", "."))
        walking_duration.push(data[0].legs[0].duration.text.replace(",", "."))

        this.setState({
            walking_names,
            walking_distance: [...walking_distance],
            walking_duration: [...walking_duration],
        })
    }

    handleBikingDirections = (data = new Array()) => {
        let biking_names = []
        data[0].legs[0].steps.forEach(s => {
            if (s.travel_mode == "TRANSIT") {
                biking_names.push(s.transit.line.short_name)
            }
        })

        let v = (data[0].legs[0].duration.value / 60) / 2.4,
            v_int = parseInt(v),
            h_int = parseInt(v_int / 60),
            m_int = parseInt(v % 60),
            s = "";

        if (h_int == 0) {
            s = `${m_int} min`
        } else if (h_int == 1) {
            s = `${h_int} ora ${m_int} min`
        } else if (h_int > 1) {
            s = `${h_int} ore ${m_int} min`
        }

        let { biking_distance, biking_duration } = this.state;
        biking_distance.push(data[0].legs[0].distance.text.replace(",", "."))
        biking_duration.push(s.replace(",", "."))

        this.setState({
            biking_names,
            biking_distance: [...biking_distance],
            biking_duration: [...biking_duration],
        })
    }

    renderRawLine() {
        console.log(this.state)
        return this.state.raw_name.map((e, i) => (
            <span key={i}>
                {e},
                {this.state.walking_distance[i]},
                {this.state.walking_duration[i]},
                {this.state.biking_distance[i]},
                {this.state.biking_duration[i]},
                {this.state.transit_distance[i]},
                {this.state.transit_duration[i]},
                {this.state.driving_distance[i]},
                {this.state.driving_duration[i]}
                <br></br>
            </span>))
    }

    // render() {
    //     return (
    //         <GoogleMap
    //             defaultZoom={10}
    //             defaultCenter={new google.maps.LatLng(start_point[0], start_point[1])}
    //         >
    //             {/* {this.state.directions && <DirectionsRenderer options={polylineTransit} directions={this.state.directions} />} */}
    //             {/* {this.state.driving_directions && <DirectionsRenderer options={polylineDriving} directions={this.state.driving_directions} />} */}
    //             {/* {this.state.walking_directions && <DirectionsRenderer options={polylineWalking} directions={this.state.walking_directions} />} */}
    //             {/* {this.state.biking_directions && <DirectionsRenderer options={polylineBiking} directions={this.state.biking_directions} />} */}
    //             {/* {this.props.isMarkerShown && this.renderHumanMarkers()} */}
    //             {/* {this.props.isMarkerShown &&
    //                 <Marker
    //                     icon={{
    //                         url: './../../assets/business.svg',
    //                         anchor: new google.maps.Point(17, 46),
    //                         scaledSize: new google.maps.Size(37, 37)
    //                     }}
    //                     position={{ lat: start_point[0], lng: start_point[1] }} onClick={() => { }} />} 
    //             */}
    //         </GoogleMap>
    //     )
    // }

    render() {
        return (
            <div className="container-rawdata">
                <p>
                    utente,
                    wlk_dist,
                    wlk_dura,
                    bkg_dist,
                    bkg_dura,
                    tpl_dist,
                    tpl_dura,
                    car_dist,
                    car_dura
                </p>
                {this.renderRawLine()}
            </div>
        )
    }
}



export const MapRawData = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCuAEprVH-lO3x-x9_3p4T7GI6F0_klJZE&v=3.exp&libraries=geometry,drawing,directions",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs
)(DirectionComponent);


