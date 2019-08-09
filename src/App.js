import React from "react";
import { Stage } from "@inlet/react-pixi";
import * as PIXI from 'pixi.js'
import { Food } from "./components/Food";
import { CreatureContainer } from "./containers/CreatureContainer";

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
export function App() {
  return (
    <Stage options={{ backgroundColor: 0xfafafa }} width={500} height={500}>
      <CreatureContainer />

      <Food  x={50} y={50}/>
    </Stage>
  );
}
