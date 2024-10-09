import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({ colors }) {
  return (
    <div className="ColorBoxesContainer">
      <div className="BoxesRow">
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
      </div>
      <div className="BoxesRow">
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
      </div>
      <div className="BoxesRow">
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
      </div>
      <div className="BoxesRow">
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
      </div>
      <div className="BoxesRow">
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
        <ColorBox colorArray={colors} />
      </div>
    </div>
  );
}
