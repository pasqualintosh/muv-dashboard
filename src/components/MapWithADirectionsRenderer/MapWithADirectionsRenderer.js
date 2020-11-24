import React, { Component, PureComponent } from 'react';
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker, InfoWindow } from "react-google-maps"
import { precovid } from "./../../data/precovid";
import { MyMapComponent } from '../MyMapComponent/MyMapComponent';
import { smartworking } from "./../../data/smartworking";
// import { bus } from "./../../data/bus";
// import { railway } from "./../../data/railway";
const google = window.google;
const polylineDriving = {
    polylineOptions: { strokeColor: "#3161AA" }
};
const polylineWalking = {
    polylineOptions: { strokeColor: "#6cb97e" }
};
const polylineBiking = {
    polylineOptions: { strokeColor: "#df2a5d" }
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
            show_info: false,
            info_pos: { lat: 0.0, lon: 0.0 },
            show_index: null
        }
    }

    componentDidMount() { }

    handleMarkerClick = (e, index) => {
        const DirectionsService = new google.maps.DirectionsService();

        this.props.handleRenderDatiUtente(true, () => this.renderPersonTooltip(e, index))

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
                console.log(result)
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
                    show_info: true,
                    show_index: index
                });
            } else {
                console.error(`error fetching directions ${result}`);
                console.log(result)
            }
        });

        DirectionsService.route({
            origin: new google.maps.LatLng(e.geometry.coordinates[1], e.geometry.coordinates[0]),
            destination: new google.maps.LatLng(start_point[0], start_point[1]),
            travelMode: google.maps.TravelMode.WALKING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.props.handleWalkingDirections(result.routes);
                this.props.handleBikingDirections(result.routes);

                // this.setState({
                //     walking_directions: result,
                // });
            } else {
                console.error(`error fetching directions ${result}`);
                console.log(result)
            }
        });

        // DirectionsService.route({
        //     origin: new google.maps.LatLng(e.geometry.coordinates[1], e.geometry.coordinates[0]),
        //     destination: new google.maps.LatLng(start_point[0], start_point[1]),
        //     travelMode: google.maps.TravelMode.BICYCLING,
        // }, (result, status) => {
        //     if (status === google.maps.DirectionsStatus.OK) {
        //         this.props.handleBikingDirections(result.routes);
        //         this.setState({
        //             biking_directions: result,
        //         });
        //     } else {
        //         console.error(`error fetching directions ${result}`);
        //         console.log(result)
        //     }
        // });
    }

    renderPersonTooltip(e, i) {
        return (
            <div
                style={{
                    // maxHeight: 600,
                    // maxWidth: 400,
                    // overflow: "scroll",
                }}
            >
                <p>
                    <span style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                        {e.properties.nome_e_cog}
                    </span>
                    <br />
              Comune di provenienza:&nbsp;
              <span style={{ fontWeight: "bold" }}>{e.properties.comune_di_}</span>
                    <br />
              Disabilità motoria:&nbsp;
              <span style={{ fontWeight: "bold" }}>{e.properties.disabilita}</span>
                    <br />
              Possiede:&nbsp;
              <span style={{ fontWeight: "bold" }}>{e.properties.possiedi}</span>
                </p>
                <hr />
                <p>
                    Indirizzo Intermedio andata:&nbsp;
              <span style={{ fontWeight: "bold" }}>{e.properties.indirizzo_}</span>
                    <br />
              Indirizzo Intermedio ritorno:&nbsp;
              <span style={{ fontWeight: "bold" }}>{e.properties.indirizz_1}</span>
                    <br />
              Giornate lavorative:&nbsp;
              <span style={{ fontWeight: "bold" }}>{e.properties.in_quali_g}</span>
                    <br />
              Orario d'entrata:&nbsp;
              <span style={{ fontWeight: "bold" }}>{e.properties.il_tuo_l_1}</span>
                    <br />
              Orario d'uscita:&nbsp;
              <span style={{ fontWeight: "bold" }}>{e.properties.il_tuo_lav}</span>
                    <br />
              Distanza dalla sede:&nbsp;
              <span style={{ fontWeight: "bold" }}>{e.properties.quanto_dis}</span>
                    <br />
              Tempo impiegato:&nbsp;
              <span style={{ fontWeight: "bold" }}>{e.properties.quanto_tem}</span>
                </p>
                <hr />
                <p>
                    <span style={{ fontWeight: "bold" }}>
                        MEZZI UTILIZZATI PRIMA DEL COVID
              </span>
                    <br />I mezzi sono combinati tra loro?{" "}
                    {e.properties.utilizzavi == 0 ? "No" : "Si"}
                    <br />
                    {e.properties.mezzo_unic}
                    <br />
                    {e.properties.mezzo_un_1}
                    <br />
                    {e.properties.mezzo_un_2}
                    <br />
                    <span style={{ fontWeight: "bold" }}>
                        {e.properties.mezzo_1 ? e.properties.mezzo_1 + "; " : ""}
                    </span>
                    {e.properties.linea1 ? e.properties.linea1 + "; " : ""}
                    {e.properties.tratta1 ? e.properties.tratta1 + "; " : ""}
                    <span style={{ fontWeight: "bold" }}>
                        {e.properties.mezzo_2 ? e.properties.mezzo_2 + "; " : ""}
                    </span>
                    {e.properties.linea2 ? e.properties.linea2 + "; " : ""}
                    {e.properties.tratta2 ? e.properties.tratta2 + "; " : ""}
                    <span style={{ fontWeight: "bold" }}>
                        {e.properties.mezzo_3 ? e.properties.mezzo_3 + "; " : ""}
                    </span>
                    {e.properties.linea3 ? e.properties.linea3 + "; " : ""}
                    {e.properties.tratta3 ? e.properties.tratta3 + "; " : ""}
                    <span style={{ fontWeight: "bold" }}>
                        {e.properties.mezzo_4 ? e.properties.mezzo_4 + "; " : ""}
                    </span>
                    {e.properties.linea4 ? e.properties.linea4 + "; " : ""}
                    {e.properties.tratta4 ? e.properties.tratta4 + "; " : ""}
                    <span style={{ fontWeight: "bold" }}>
                        {e.properties.mezzo_5 ? e.properties.mezzo_5 + "; " : ""}
                    </span>
                    {e.properties.linea5 ? e.properties.linea5 + "; " : ""}
                    {e.properties.tratta5 ? e.properties.tratta5 + "; " : ""}
                </p>
                <hr />
                <p>
                    <span style={{ fontWeight: "bold" }}>SCELTA POST COVID</span>
                    <br />
                    {e.properties.postcovid}
                </p>
                <hr />
                <p>
                    <span style={{ fontWeight: "bold" }}>SMARTWORKING</span>
                    <br />
              Possibilità di lavorare in smart working (1-5):{" "}
                    {e.properties.Smartwork}
                    <br />
              Propensione:{" "}
                    {smartworking.features[i].properties.q2wHide_ti_piacere == 1
                        ? "Si"
                        : "No"}
                </p>
                <hr />

                <p>
                    <span style={{ fontWeight: "bold" }}>NAVETTA AZIENDALE</span>
                    <br />
              Utilizzerebbe un servizio navetta:{" "}
                    {e.properties.servizio_n == 0 ? "No" : "Si"}
                    <br />
              Giorni: {e.properties.giorni_ser}
                    <br />
              Nodo: {e.properties.da_quale_n}
                    <br />
                </p>

                <hr />

                <p>
                    <span style={{ fontWeight: "bold" }}>CAR POOLING</span>
                    <br />
              Condividerebbe l’auto con un collega: {e.properties.propensi_2}
                    <br />
                    {e.properties.giorni_pro}
                    <br />
              Autorizzazione a fornire contatto per car pooling:{" "}
                    {e.properties.Cont_carpo}
                </p>

                <hr />

                <p>
                    <span style={{ fontWeight: "bold" }}>PROPENSIONE AL CAMBIAMENTO</span>
                    <br />
              Utilizzerebbe… <br />
                    <span style={{ fontWeight: "bold" }}>Bici/monopattino: </span>
                    {e.properties.propension}
                    <br />
                    <span style={{ fontWeight: "bold" }}>Trasporto pubblico: </span>
                    {e.properties.propensi_1}
                    <br />
                    <span style={{ fontWeight: "bold" }}>Car sharing: </span>
                    {e.properties.utilizzere}
                </p>

                <p>
                    <span style={{ fontWeight: "bold" }}>COMMENTI</span>
                    <br />
                    {e.properties.commenti}
                </p>
            </div>
        );
    }

    renderHumanMarkers() {
        const { show_info, info_pos, show_index } = this.state;

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
                        onClick={() => { this.handleMarkerClick(e, index) }}
                    >
                        {/* {(show_info && show_index == index) && (
                            <InfoWindow
                                onCloseClick={() => { this.setState({ show_info: false, show_index: null }) }}
                            >
                                {this.renderPersonTooltip(e, index)}
                            </InfoWindow>
                        )} */}
                    </Marker>
                );
            else return <div key={index} />;
        });
    }

    render() {
        return (
            <GoogleMap
                options={{
                    styles: {
                        default: [],
                        hide: [
                            {
                                featureType: "poi.business",
                                elementType: "all",
                                stylers: [{ visibility: "off" }],
                            },
                            {
                                featureType: "poi.park",
                                elementType: "all",
                                stylers: [{ visibility: "off" }],
                            },
                            {
                                featureType: "poi.place_of_worship",
                                elementType: "all",
                                stylers: [{ visibility: "off" }],
                            },
                            {
                                featureType: "poi.sports_complex",
                                elementType: "all",
                                stylers: [{ visibility: "off" }],
                            },
                            {
                                featureType: "water",
                                elementType: "all",
                                stylers: [{ visibility: "off" }],
                            },
                            {
                                featureType: "poi.attraction",
                                elementType: "all",
                                stylers: [{ visibility: "off" }],
                            },
                            {
                                featureType: "poi.government",
                                elementType: "all",
                                stylers: [{ visibility: "off" }],
                            },
                            {
                                featureType: "poi.medical",
                                elementType: "all",
                                stylers: [{ visibility: "off" }],
                            },
                        ],
                    }
                }}
                defaultZoom={10}
                defaultCenter={new google.maps.LatLng(start_point[0], start_point[1])}
            >
                {this.state.directions && <DirectionsRenderer options={polylineTransit} directions={this.state.directions} />}
                {this.state.driving_directions && <DirectionsRenderer options={polylineDriving} directions={this.state.driving_directions} />}
                {this.state.walking_directions && <DirectionsRenderer options={polylineWalking} directions={this.state.walking_directions} />}
                {this.state.biking_directions && <DirectionsRenderer options={polylineBiking} directions={this.state.biking_directions} />}
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
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(DirectionComponent);


