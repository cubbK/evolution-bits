import React, { useState, useEffect } from "react";
import { useApp } from "@inlet/react-pixi";
import { Creature } from "../components/Creature";

export function CreatureContainer(props) {
  const [pos, setPos] = useState({
    x: props.x ? props.x : 0,
    y: props.y ? props.y : 0
  });
  const [direction, setDirection] = useState("forward");

  const app = useApp();
  useEffect(() => {
    function tick(delta) {
      if (direction === "forward") {
        setPos({ x: pos.x + 2 * delta, y: pos.y + 2 * delta });
      } else {
        setPos({ x: pos.x - 2 * delta, y: pos.y - 2 * delta });
      }
      if (pos.x > 500 && pos.y > 500) {
        setDirection("backward");
      }
      if (pos.x < 0 && pos.y < 0) {
        setDirection("forward");
      }
    }

    app.ticker.add(tick);

    return () => app.ticker.remove(tick);
  }, [app.ticker, direction, pos.x, pos.y]);

  return <Creature x={pos.x} y={pos.y} />;
}
