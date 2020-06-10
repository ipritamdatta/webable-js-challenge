import React from "react";

export const Shipment = (props) => {
  console.log(props);
  return (
    <div>
      {props.collections.map(({ id, ...otherCollectionProps }) =>
        console.log(id)
      )}
    </div>
  );
};
