import React from "react";
import "./collection-preview.styles.css";
import { Link } from "react-router-dom";

const CollectionPreview = (props) => {
  // console.log(props);

  return (
    <div className="card-container">
      <h2>
        <span>ID: </span> {props.shipmentDetail.id}
      </h2>
      <p>
        <span>Name: </span>
        {props.shipmentDetail.name}
      </p>
      <p>
        <span>Mode: </span>
        {props.shipmentDetail.mode}
      </p>
      <p>
        <span>Type: </span>
        {props.shipmentDetail.type}
      </p>
      <p>
        <span>Destination: </span>
        {props.shipmentDetail.destination}
      </p>
      <p>
        <span>Origin: </span>
        {props.shipmentDetail.origin}
      </p>

      {/* <button onClick={handleClick}>View details</button> */}
      <Link to={`/detail/${props.shipmentDetail.id}`}>View</Link>
    </div>
  );
};
export default CollectionPreview;
