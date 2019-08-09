import React from "react";
import { Sprite } from "@inlet/react-pixi";
import food from "./food/food.png"

export function Food(props) {
  return (
    <Sprite
      image={food}
      scale={[3, 3]}
      {...props}
    />
  );
}
