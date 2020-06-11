import React from "react";

import "./collection-preview.styles.css";

const CollectionPreview = (props) => {
  console.log(props);

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
        <span>Designation: </span>
        {props.shipmentDetail.designation}
      </p>
      <p>
        <span>Origin: </span>
        {props.shipmentDetail.origin}
      </p>
    </div>
  );
};
export default CollectionPreview;
