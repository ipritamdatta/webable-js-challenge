import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import shipments from "./data/db";
import { Shipment } from "./components/shipment/shipment.components";

class App extends Component {
  constructor() {
    super();

    this.state = {
      collections: shipments,
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const { collections, searchField } = this.state;
    const filteredCollections = collections.filter((collection) =>
      collection.id.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search by shipment id"
          onChange={this.handleChange}
        />
        <Shipment collections={filteredCollections} />
      </div>
    );
  }
}

export default App;
