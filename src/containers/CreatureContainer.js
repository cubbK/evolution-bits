import React, { useState, useEffect, useCallback, useRef } from "react";
import { useApp } from "@inlet/react-pixi";
import { Creature } from "../components/Creature";
import { TilingSprite } from "@inlet/react-pixi";
import creatureSprite from "../components/creature/slime_monster_spritesheet.png";

export function CreatureContainer(props) {
  const [x, setX] = useState(20);
  const [y, setY] = useState(20);
  const [direction, setDirection] = useState("forward");
  const latestX = useRef(x);
  const latestSetX= useRef(setX)
  

  useEffect(() => {
    console.log("run effect")
    
    function tick(delta) {
      console.log(latestX.current)
      latestSetX.current(latestX.current + 1 * delta)
      latestX.current = x;
    }

    props.app.ticker.add(tick);

    return function cleanup() {
      console.log("cleanEffect")
      props.app.ticker.remove(tick)
    }
  }, [])

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
