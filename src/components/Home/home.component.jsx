import React, { Component } from "react";
import shipments from "../../data/db";
import { Shipment } from "../shipment/shipment.components";
import { SearchBox } from "../search/search-box.component";

class Home extends Component {
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
      <div>
        <SearchBox
          placeholder="Search By Shipment ID"
          handleChange={this.handleChange}
        />
        <Shipment collections={filteredCollections} />
      </div>
    );
  }
}

export default Home;
