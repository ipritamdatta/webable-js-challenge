import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import shipments from "./data/db";
import { Shipment } from "./components/shipment/shipment.components";
import { SearchBox } from "./components/search/search-box.component";

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
        <SearchBox
          placeholder="Search By Shipment ID"
          handleChange={this.handleChange}
        />
        <Shipment collections={filteredCollections} />
      </div>
    );
  }
}

export default App;
