import React from "react";
import "../collection-detail.styles.css";

export const Service = (props) => {
  return (
    <div>
      <p className="shipmentDetail-title">Service Details </p>
      {props.serviceDetail.map((service) => (
        <div key={service.id}>
          <p>
            <span>Type: </span>
            <span>{service.type}</span>
          </p>
        </div>
      ))}
    </div>
  );
};
