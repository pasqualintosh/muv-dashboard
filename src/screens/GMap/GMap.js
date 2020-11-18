import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { MyFancyComponent } from "./../../components/MyMapComponent/MyMapComponent";
import parse from 'html-react-parser';

class Charts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lat_centro: 38.1148595,
            lon_centro: 13.3629781,
            lat_a: 38.1199456,
            lon_a: 13.3588283,
            lat_b: 38.1097119,
            lon_b: 13.3584398,
            spelling_directions: [],
            transit_names: [],
            transit_distance: null,
            transit_duration: null,
            driving_distance: null,
            driving_duration: null,
        }
    }

    handleTransitDirections = (data = new Array()) => {
        console.log(data)
        let transit_names = []
        data[0].legs[0].steps.forEach(s => {
            if (s.travel_mode == "TRANSIT") {
                transit_names.push(s.transit.line.short_name)
            }
        })
        this.setState({
            spelling_directions: [...data],
            transit_names,
            transit_distance: data[0].legs[0].distance.text,
            transit_duration: data[0].legs[0].duration.text,
        })
    }

    handleDrivingDirections = (data = new Array()) => {
        let driving_names = []
        data[0].legs[0].steps.forEach(s => {
            if (s.travel_mode == "TRANSIT") {
                driving_names.push(s.transit.line.short_name)
            }
        })
        this.setState({
            spelling_driving_directions: [...data],
            driving_names,
            driving_distance: data[0].legs[0].distance.text,
            driving_duration: data[0].legs[0].duration.text,
        })
    }

    renderFormCentro() {
        return (
            <Col>
                <Form>
                    <Form.Group>
                        <Form.Label>Latitudine centro</Form.Label>
                        <Form.Control disabled onChange={() => { }} type="number" value={this.state.lat_centro} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Longitudine centro</Form.Label>
                        <Form.Control disabled onChange={() => { }} type="number" value={this.state.lon_centro} />
                    </Form.Group>
                </Form>
            </Col>
        )
    }

    renderFormA() {
        return (
            <Col>
                <Form>
                    <Form.Group>
                        <Form.Label>Latitudine A</Form.Label>
                        <Form.Control disabled onChange={() => { }} type="number" value={this.state.lat_a} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Longitudine A</Form.Label>
                        <Form.Control disabled onChange={() => { }} type="number" value={this.state.lon_a} />
                    </Form.Group>
                </Form>
            </Col>
        )
    }

    renderFormB() {
        return (
            <Col>
                <Form>
                    <Form.Group>
                        <Form.Label>Latitudine B</Form.Label>
                        <Form.Control disabled onChange={() => { }} type="number" value={this.state.lat_b} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Longitudine B</Form.Label>
                        <Form.Control disabled onChange={() => { }} type="number" value={this.state.lon_b} />
                    </Form.Group>
                </Form>
            </Col>
        )
    }

    renderSpellingDirections() {
        if (this.state.spelling_directions.length > 0) {
            return this.state.spelling_directions[0].legs[0].steps.map((s, i) => {
                return (
                    <li key={i}>
                        {parse(s.instructions)}
                    </li>
                )
            }
            )
        } else return <div></div>
    }

    renderProperties() {
        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col>
                        <p>Mezzo privato</p>
                    </Col>
                    <Col>
                        <p>
                            Durata viaggio: {this.state.driving_duration}
                        </p>
                    </Col>
                    <Col>
                        <p>
                            Distanza viaggio: {this.state.driving_distance}
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <p>Mezzo pubblico</p>
                    </Col>
                    <Col>
                        <p>
                            Durata viaggio: {this.state.transit_duration}
                        </p>
                    </Col>
                    <Col>
                        <p>
                            Distanza viaggio: {this.state.transit_distance}
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }

    render() {
        return (
            <Container>
                <hr></hr>
                {this.renderProperties()}
                {/* 
                <Row className="justify-content-md-center">
                    {this.renderFormCentro()}
                    {this.renderFormA()}
                    {this.renderFormB()}
                </Row> 
                */}
                <Row className="justify-content-md-center">
                    <Col>
                        <MyFancyComponent
                            centerCoordinates={{ lat: this.state.lat_centro, lon: this.state.lon_centro }}
                            aCoordinates={{ lat: this.state.lat_a, lon: this.state.lon_a }}
                            bCoordinates={{ lat: this.state.lat_b, lon: this.state.lon_b }}
                            handleTransitDirections={this.handleTransitDirections}
                            handleDrivingDirections={this.handleDrivingDirections}
                        />
                    </Col>
                </Row>
                <hr></hr>
                <Row className="justify-content-md-center">
                    <div>
                        <p>Linee/a di riferimento: {this.state.transit_names[0]}</p>
                        <p>Percorso:<span className="bold"></span></p>
                    </div>
                    <hr></hr>
                    <ul>
                        {this.renderSpellingDirections()}
                    </ul>
                </Row>
            </Container>
        );
    }
}

export default Charts;
