import React, { Component } from "react";
import { Map, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "./Map.css";
import { precovid } from "./../../data/precovid";
import { smartworking } from "./../../data/smartworking";
import { bus } from "./../../data/bus";
import { railway } from "./../../data/railway";
import L from "leaflet";
import { Form } from "react-bootstrap";
import axios from "axios";

// https://overpass-api.de/api/interpreter?data=%5Bout%3Ajson%5D%5Btimeout%3A60%5D%3B%0A%0Anode%28_VAR-NODO_%29%3B%0Arel%28bn%29%3B%0A%3E%3E%3B%0A%0Aout%3B%0A

export const personPnt = new L.Icon({
  iconUrl: "./../../assets/man-user.svg",
  iconRetinaUrl: "./../../assets/man-user.svg",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [20, 20],
  color: "#dc1861",
  className: "user",
});

export const metroPnt = new L.Icon({
  iconUrl: "./../../assets/metro_btn_icn.svg",
  iconRetinaUrl: "./../../assets/metro_btn_icn.svg",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [50, 50],
  color: "#dc1861",
  className: "user",
});

export const busPnt = new L.Icon({
  iconUrl: "./../../assets/bus_btn_icn.svg",
  iconRetinaUrl: "./../../assets/bus_btn_icn.svg",
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [50, 50],
  color: "#FA931E",
  className: "bus"
});

export const trainPnt = new L.Icon({
  iconUrl: "./../../assets/train_btn_icn.svg",
  iconRetinaUrl: "./../../assets/train_btn_icn.svg",
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [50, 50],
  color: "#153972",
  className: "train"
});

export const companyPnt = new L.Icon({
  iconUrl: "./../../assets/business.svg",
  iconRetinaUrl: "./../../assets/business.svg",
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40],
});

const start_point = [41.9136351, 12.462278];

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uomo: true,
      donna: true,
      disabilita: false,
      automobile: false,
      tpl: false,
      intermedia_andata: false,
      intermedia_ritorno: false,
      carpooling: "",
      navetta: false,
      display_tpl: true,
      display_train: true,
      display_metro: true,
      smartworking: false,
      display_node_info: false,
      node_info: {}
    };

  }

  handleClick(el) {
    console.log(el);
  }

  renderPersonTooltip(e, i) {
    return (
      <div
        style={{
          maxHeight: 600,
          overflow: "scroll",
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
    let filters = true,
      automobile = this.state.automobile
        ? "automobile"
        : "nessuno dei precedenti",
      tpl = this.state.tpl
        ? "trasporto pubblico locale"
        : "nessuno dei precedenti";

    return precovid.features.map((e, index) => {
      // if (this.state.automobile)
      //   filters = e.properties.possiedi.includes(automobile);
      // else if (this.state.tpl) filters = e.properties.possiedi.includes(tpl);

      if (this.state.intermedia_andata)
        filters = e.properties.indirizzi_ != null;
      if (this.state.intermedia_ritorno)
        filters = e.properties.indirizz_1 != "-";
      if (this.state.carpooling != "")
        filters = e.properties.propensi_2 == this.state.carpooling;
      if (this.state.navetta)
        filters = e.properties.servizio_n == this.state.navetta ? 1 : 0;

      if (this.state.smartworking)
        filters =
          smartworking.features[index].properties.q2wHide_ti_piacere == 1;

      if (e.geometry && filters)
        return (
          <Marker
            position={[e.geometry.coordinates[1], e.geometry.coordinates[0]]}
            key={index}
            icon={personPnt}
            onclick={() => {
              this.handleClick(e);
            }}
          >
            <Popup style={{ width: 300, keepInView: true }}>
              {this.renderPersonTooltip(e, index)}
            </Popup>
          </Marker>
        );
      else return <div key={index} />;
    });
  }

  renderBusTooltip(e, index) {
    if (e.properties.name) {

      if (this.state.display_node_info) {

        let node_p = this.state.node_info.map((e, i) => (
          <p key={i}>Linea: {e.ref}</p>
        ))

        return (
          <div>
            <p>Fermata:{e.properties.name}</p>
            {node_p}
          </div>
        )
      }

      return (
        <div>
          <p>{e.properties.name}</p>
        </div>)
    }
    else {
      return <div />
    }
  }

  renderTrainTooltip(e, index) {
    if (e.properties.name) {

      if (this.state.display_node_info) {

        let node_p = this.state.node_info.map((e, i) => (
          <p key={i}>Linea: {e.ref}</p>
        ))

        return (
          <div>
            <p>Fermata:{e.properties.name}</p>
            {node_p}
          </div>
        )
      }

      return (
        <div>
          <p>{e.properties.name}</p>
        </div>)
    }
    else {
      return <div />
    }
  }

  renderMetroTooltip(e, index) {
    if (e.properties.name) {

      if (this.state.display_node_info) {

        let node_p = this.state.node_info.map((e, i) => (
          <p key={i}>Linea: {e.ref}</p>
        ))

        return (
          <div>
            <p>Fermata:{e.properties.name}</p>
            {node_p}
          </div>
        )
      }

      return (
        <div>
          <p>{e.properties.name}</p>
        </div>)
    }
    else {
      return <div />
    }
  }

  handleBusClick(e) {
    let node = e.id.substring(e.id.indexOf('/') + 1),
      url = `https://overpass-api.de/api/interpreter?data=%5Bout%3Ajson%5D%5Btimeout%3A60%5D%3B%0A%0Anode%28${node}%29%3B%0Arel%28bn%29%3B%0A%3E%3E%3B%0A%0Aout%3B%0A`;

    console.log(e)
    this.setState({ display_node_info: false })

    axios
      .get(url)
      .then((response) => {
        console.log(response)
        let relations = response.data.elements.filter(e => e.type == "relation");

        if (relations.length > 1) {
          let tags = relations.map(e => e.tags)
          this.setState({
            display_node_info: true,
            node_info: [...tags]
          })
        }
        else {
          this.setState({
            display_node_info: true,
            node_info: [{ ...relations[0].tags }]
          })
        }



      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
      });
  }

  handleTrainClick(e) {
    let node = e.id.substring(e.id.indexOf('/') + 1),
      url = `https://overpass-api.de/api/interpreter?data=%5Bout%3Ajson%5D%5Btimeout%3A60%5D%3B%0A%0Anode%28${node}%29%3B%0Arel%28bn%29%3B%0A%3E%3E%3B%0A%0Aout%3B%0A`;

    console.log(e)
    this.setState({ display_node_info: false })

    axios
      .get(url)
      .then((response) => {
        console.log(response)
        let relations = response.data.elements.filter(e => e.type == "relation");

        if (relations.length > 1) {
          let tags = relations.map(e => e.tags)
          this.setState({
            display_node_info: true,
            node_info: [...tags]
          })
        }
        else {
          this.setState({
            display_node_info: true,
            node_info: [{ ...relations[0].tags }]
          })
        }



      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
      });
  }

  handleMetroClick(e) {
    let node = e.id.substring(e.id.indexOf('/') + 1),
      url = `https://overpass-api.de/api/interpreter?data=%5Bout%3Ajson%5D%5Btimeout%3A60%5D%3B%0A%0Anode%28${node}%29%3B%0Arel%28bn%29%3B%0A%3E%3E%3B%0A%0Aout%3B%0A`;

    console.log(e)
    this.setState({ display_node_info: false })

    axios
      .get(url)
      .then((response) => {
        console.log(response)
        let relations = response.data.elements.filter(e => e.type == "relation");

        if (relations.length > 1) {
          let tags = relations.map(e => e.tags)
          this.setState({
            display_node_info: true,
            node_info: [...tags]
          })
        }
        else {
          this.setState({
            display_node_info: true,
            node_info: [{ ...relations[0].tags }]
          })
        }



      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
      });
  }

  renderBusMarkers() {
    if (this.state.display_tpl)
      return bus.features.map((e, index) => {
        if (e.geometry && index % 22 == 0)
          return (
            <Marker
              position={[e.geometry.coordinates[1], e.geometry.coordinates[0]]}
              key={index}
              icon={busPnt}
              onclick={() => {
                this.handleBusClick(e)
              }}
            >
              <Popup style={{ width: 300, keepInView: true }}>
                {this.renderBusTooltip(e, index)}
              </Popup>
            </Marker>
          );
        else return <div key={index} />;
      });
    else return <div />;
  }

  renderTrainMarkers() {
    if (this.state.display_train)
      return railway.features.map((e, index) => {
        // if (e.geometry && index % 22 == 0 && e.properties.station == "train")
        if (e.geometry && e.properties.station == "train")
          return (
            <Marker
              position={[e.geometry.coordinates[1], e.geometry.coordinates[0]]}
              key={index}
              icon={trainPnt}
              onclick={() => {
                this.handleTrainClick(e)
              }}
            >

              <Popup style={{ width: 300, keepInView: true }}>
                {this.renderTrainTooltip(e, index)}
              </Popup>

            </Marker>
          );
        else return <div key={index} />;
      });
    else return <div />;
  }

  renderMetroMarkers() {
    if (this.state.display_metro)
      return railway.features.map((e, index) => {
        // if (e.geometry && index % 22 == 0 && e.properties.station == "subway")
        if (e.geometry && e.properties.station == "subway")
          return (
            <Marker
              position={[e.geometry.coordinates[1], e.geometry.coordinates[0]]}
              key={index}
              icon={metroPnt}
              onclick={() => {
                this.handleMetroClick(e)
              }}
            >

              <Popup style={{ width: 300, keepInView: true }}>
                {this.renderMetroTooltip(e, index)}
              </Popup>

            </Marker>
          );
        else return <div key={index} />;
      });
    else return <div />;
  }

  onChangeCar() {
    this.setState({
      automobile: !this.state.automobile,
      tpl: !this.state.automobile ? false : this.state.tpl,
    });
  }

  onChangeTPL() {
    this.setState({
      tpl: !this.state.tpl,
      automobile: !this.state.tpl ? false : this.state.automobile,
    });
  }

  onChangeAndata() {
    this.setState({
      intermedia_andata: !this.state.intermedia_andata,
    });
  }

  onChangeRitorno() {
    this.setState({
      intermedia_ritorno: !this.state.intermedia_ritorno,
    });
  }

  onChangeNavetta() {
    this.setState({
      navetta: !this.state.navetta,
    });
  }

  onChangeSmartworking() {
    this.setState({
      smartworking: !this.state.smartworking,
    });
  }

  onChangeCarpooling() {
    console.log(document.querySelectorAll("#car-pooling")[0].value);
    this.setState({
      carpooling: document.querySelectorAll("#car-pooling")[0].value,
    });
  }

  render() {
    return (
      <div>
        <div className={"form-group"} style={{ height: "1vh" }}>
          <input
            className=""
            type="radio"
            checked={this.state.display_tpl}
            onClick={() => {
              this.setState({
                display_tpl: !this.state.display_tpl,
              });
            }}
            onChange={() => { }}
          />
          <label>&nbsp;Fermate Bus</label>
        </div>
        <div className={"form-group"} style={{ height: "1vh" }}>
          <input
            className=""
            type="radio"
            checked={this.state.display_train}
            onClick={() => {
              this.setState({
                display_train: !this.state.display_train,
              });
            }}
            onChange={() => { }}
          />
          <label>&nbsp;Fermate Treni</label>
        </div>
        <div className={"form-group"} style={{ height: "1vh" }}>
          <input
            className=""
            type="radio"
            checked={this.state.display_metro}
            onClick={() => {
              this.setState({
                display_metro: !this.state.display_metro,
              });
            }}
            onChange={() => { }}
          />
          <label>&nbsp;Fermate Metro</label>
        </div>

        <Map
          center={start_point}
          zoom={12}
          style={{
            height: 900,
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={start_point} icon={companyPnt}></Marker>
          {this.renderHumanMarkers()}
          {this.renderBusMarkers()}
          {this.renderTrainMarkers()}
          {this.renderMetroMarkers()}
        </Map>
        <hr />
        <div>
          <header style={{ fontWeight: "bold" }}>Filtri dipendenti</header>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              checked={this.state.intermedia_andata}
              onClick={() => this.onChangeAndata()}
              onChange={() => { }}
            />
            <label className="form-check-label">
              Dipendenti con tappa intermedia viaggio d'andata
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              checked={this.state.intermedia_ritorno}
              onClick={() => this.onChangeRitorno()}
              onChange={() => { }}
            />
            <label className="form-check-label">
              Dipendenti con tappa intermedia viaggio di ritorno
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              checked={this.state.navetta}
              onClick={() => this.onChangeNavetta()}
              onChange={() => { }}
            />
            <label className="form-check-label">
              Dipendenti che utilizzerebbero un servizio di navetta aziendale
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              checked={this.state.smartworking}
              onClick={() => this.onChangeSmartworking()}
              onChange={() => { }}
            />
            <label className="form-check-label">Smartworking</label>
          </div>
          <div className="form-group">
            <Form.Group onChange={() => this.onChangeCarpooling()}>
              <Form.Label>Car Pooling:</Form.Label>
              <Form.Control as="select" id={"car-pooling"}>
                <option value={""}></option>
                <option value={"... solo occasionalmente"}>
                  ... solo occasionalmente
                </option>
                <option value={"… senza alcun problema"}>
                  … senza alcun problema
                </option>
                <option value={"Mai"}>Mai</option>
              </Form.Control>
            </Form.Group>
          </div>
        </div>
      </div>
    );
  }
}

export default MapComponent;
