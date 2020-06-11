import React from "react";
import CollectionPreview from "../collection/collection-preview.component";
import "./shipment.styles.css";

export const Shipment = (props) => {
  return (
    <div className="shipment-list">
      {props.collections.map((collection) => (
        <CollectionPreview key={collection.id} shipmentDetail={collection} />
      ))}
    </div>
  );
};
