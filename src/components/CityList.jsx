import React from "react";
import CityItems from "./CityItem";
import Message from "./Message";

export default function CityList({ cities }) {
  if (!cities.length)
    return <Message mesaage="add your first city by adding the name" />;
  return (
    <div>
      {cities.map((city) => {
        return <CityItems city={city} key={city.id} />;
      })}
    </div>
  );
}
