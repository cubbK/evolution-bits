import React from "react";
import { Stage } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
import { Food } from "./components/Food";
import { CreatureContainer } from "./containers/CreatureContainer";
import { useActualScreenSize} from "./hooks/useActualScreenSize";


PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

export function App() {
  const[width, height] = useActualScreenSize();
  console.log(width, height)
  return (
    <Stage
      options={{ backgroundColor: 0x222222 }}
      width={width}
      height={height}
    >
      <CreatureContainer x={10} y={10} />
      <CreatureContainer x={50} y={50} />
      <Food x={50} y={50} />
    </Stage>
  );
}
