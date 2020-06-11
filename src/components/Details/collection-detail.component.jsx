import React, { Component } from "react";
import "./collection-detail.styles.css";
import shipments from "../../data/db";
import { Link } from "react-router-dom";
import { Cargo } from "./cargo/cargo.component";

class CollectionDetail extends Component {
  constructor() {
    super();
    this.state = {
      getJsonData: shipments,
    };
  }
  render() {
    // console.log(this.props.match.params.id);
    const { getJsonData } = this.state;
    const filteredData = getJsonData.filter(
      (jsondata) => jsondata.id === this.props.match.params.id
    );

    const shipment = filteredData.map((shipmentdata) => {
      return (
        <div key={shipmentdata.id} className="detail-container">
          <h3>ID: {shipmentdata.id}</h3>
          <div>
            <p>
              <span className="shipmentDetail-title">Name:</span>{" "}
              {shipmentdata.name}
            </p>
            <Cargo cargoDetail={shipmentdata.cargo} />
            <p>
              <span className="shipmentDetail-title">Mode:</span>{" "}
              {shipmentdata.mode}
            </p>
            <p>
              <span className="shipmentDetail-title">Type:</span>{" "}
              {shipmentdata.type}
            </p>
          </div>
          <div>
            <p>
              <span className="shipmentDetail-title">Destination:</span>{" "}
              {shipmentdata.destination}
            </p>
            <p>
              <span className="shipmentDetail-title">Origin:</span>{" "}
              {shipmentdata.origin}
            </p>
            <h4>Services</h4>
            <p>
              <span className="shipmentDetail-title">Type:</span>{" "}
              {shipmentdata.type}
            </p>
            <p>
              <span className="shipmentDetail-title">Total:</span>{" "}
              {shipmentdata.total}
            </p>
            <p>
              <span className="shipmentDetail-title">Status:</span>{" "}
              {shipmentdata.status}
            </p>
            <p>
              <span className="shipmentDetail-title">User Id:</span>{" "}
              {shipmentdata.userId}
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="detail-container-parent">{shipment}</div>
        <Link to="/" className="backBtn">
          GO BACK
        </Link>
      </div>
    );
  }
}

export default CollectionDetail;
