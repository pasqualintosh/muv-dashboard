import React, { Component } from "react";
import { Container, Row, Col, Form, ListGroup, Jumbotron, Table } from "react-bootstrap";
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
            walking_names: null,
            walking_distance: null,
            walking_duration: null,
            biking_names: null,
            biking_distance: null,
            biking_duration: null,
            render_dati_utente: true,
            dati_utente: props => (<div>Clicca su utente per conoscerne i dati.</div>)
        }
    }

    handleRenderDatiUtente = (flag, component) => {
        this.setState({
            render_dati_utente: flag,
            dati_utente: component
        })
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

    handleWalkingDirections = (data = new Array()) => {
        let walking_names = []
        data[0].legs[0].steps.forEach(s => {
            if (s.travel_mode == "TRANSIT") {
                walking_names.push(s.transit.line.short_name)
            }
        })
        this.setState({
            // spelling_driving_directions: [...data],
            walking_names,
            walking_distance: data[0].legs[0].distance.text,
            walking_duration: data[0].legs[0].duration.text,
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

        this.setState({
            // spelling_driving_directions: [...data],
            biking_names,
            biking_distance: data[0].legs[0].distance.text,
            // biking_duration: data[0].legs[0].duration.text,
            biking_duration: s,
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
                    <ListGroup.Item key={i}>
                        {parse(s.instructions)}
                    </ListGroup.Item>
                )
            }
            )
        } else return <div></div>
    }

    renderProperties() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Km</th>
                        <th>Tempo</th>
                        <th>CO2</th>
                        <th>€</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mezzo Privato <span className={"circle auto"}></span></td>
                        <td>{this.state.driving_distance}</td>
                        <td>{this.state.driving_duration}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Piedi <span className={"circle walk"}></span></td>
                        <td>{this.state.walking_distance}</td>
                        <td>{this.state.walking_duration}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TPL <span className={"circle transit"}></span></td>
                        <td>{this.state.transit_distance}</td>
                        <td>{this.state.transit_duration}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Bici <span className={"circle bike"}></span></td>
                        <td>{this.state.biking_distance}</td>
                        <td>{this.state.biking_duration}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        )
    }

    render() {
        return (
            <Container>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <MyFancyComponent
                            centerCoordinates={{ lat: this.state.lat_centro, lon: this.state.lon_centro }}
                            aCoordinates={{ lat: this.state.lat_a, lon: this.state.lon_a }}
                            bCoordinates={{ lat: this.state.lat_b, lon: this.state.lon_b }}
                            handleTransitDirections={this.handleTransitDirections}
                            handleDrivingDirections={this.handleDrivingDirections}
                            handleWalkingDirections={this.handleWalkingDirections}
                            handleBikingDirections={this.handleBikingDirections}
                            handleRenderDatiUtente={this.handleRenderDatiUtente}
                        />
                    </Col>
                    <Col md={4}>
                        <div className="user-panel">
                            <h6>Dati utente</h6>
                            {this.state.render_dati_utente && this.state.dati_utente()}
                        </div>

                    </Col>
                </Row>
                <hr></hr>
                {this.renderProperties()}
                <hr></hr>
                <Row className="justify-content-md-center">
                    <Col>
                        <span>
                            <p>Linee/a di riferimento: {this.state.transit_names[0]}</p>
                        </span>
                        <ListGroup className="secondary">
                            {this.renderSpellingDirections()}
                        </ListGroup>
                    </Col>
                </Row>
                <hr></hr>
            </Container>
        );
    }
}

export default Charts;
