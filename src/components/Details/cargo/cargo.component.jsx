import React from "react";
import "../collection-detail.styles.css";

export const Cargo = (props) => {
  return (
    <div>
      <p className="shipmentDetail-title">Cargo Description: </p>
      {props.cargoDetail.map((cargo) => (
        <div key={cargo.id}>
          <p>
            {cargo.id} {")"}
          </p>
          <p>
            <span>Type: </span>
            <span>{cargo.type}</span>
          </p>
          <p>
            <span>Description: </span>
            <span>{cargo.description}</span>
          </p>
          <p>
            <span>Volume: </span>
            <span>{cargo.volume}</span>
          </p>
        </div>
      ))}
    </div>
  );
};
