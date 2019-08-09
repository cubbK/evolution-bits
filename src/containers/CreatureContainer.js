import React, { useState } from "react";
import { Creature } from "../components/Creature";
import { TilingSprite, useApp, useTick } from "@inlet/react-pixi";
import creatureSprite from "../components/creature/slime_monster_spritesheet.png";

export function CreatureContainer(props) {
  const [x, setX] = useState(props.x ? props.x : 0);
  const [y, setY] = useState(props.y ? props.y : 0);
  const [direction, setDirection] = useState("forward");

  useTick(delta => {
    setX(x + 2)
  })


  return (
    <TilingSprite
      image={creatureSprite}
      width={48}
      height={48}
      tilePosition={{ x: 0, y: 0 }}
      tileScale={{ x: 2, y: 2 }}
      anchor={[0.5, 0.5]}
      x={x}
      y={y}
      pointerdown={() => {
        console.log("click");
        setY(y + 50);
      }}
      buttonMode={true}
      interactive={true}
    />
  );
}
