import React from 'react';

export default function House(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zip}</p>
      <button onClick={() => props.deleteHouses(props.id)}></button>
    </div>
  )
};
