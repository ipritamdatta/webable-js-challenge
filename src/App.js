import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import shipments from "./data/db";
import { Shipment } from "./components/shipment.components";

class App extends Component {
  constructor() {
    super();

    this.state = {
      collections: shipments,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="App">
        <Shipment collections={collections} />
      </div>
    );
  }
}

export default App;
