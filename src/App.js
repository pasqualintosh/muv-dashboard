import React, { Component } from "react";
import { Router } from "react-router-dom";
import history from "./services/history";
import Routes from "./routes/index";
import Layout from "./components/Layout/Layout";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={history}>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    );
  }
}
