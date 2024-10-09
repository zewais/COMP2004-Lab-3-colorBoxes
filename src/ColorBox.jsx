import { useState } from "react";

export default function ColorBox({ colorArray }) {
  const colorCount = colorArray.length;
  const [colorIndex, setColorIndex] = useState(
    Math.floor(Math.random() * colorCount)
  );

  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: colorArray[colorIndex] }}
      onClick={() => setColorIndex(Math.floor(Math.random() * colorCount))}
    ></div>
  );
}
