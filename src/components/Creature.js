import React from "react";
import { TilingSprite } from "@inlet/react-pixi";
import creatureSprite from "./creature/slime_monster_spritesheet.png"

export function Creature(props) {
  return (
    <TilingSprite
      image={creatureSprite}
      width={48}
      height={48}
      tilePosition={{x: 0, y: 0}}
      tileScale={{x: 2, y: 2}}
      anchor={[0.5, 0.5]}
      {...props}
    />
  );
}
