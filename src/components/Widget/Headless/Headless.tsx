import Widget from "../Widget/Widget";

function Headless() {
  return (
    <div className="self-start">
      <Widget style={{ withBackground: false }} />
    </div>
  );
}

export default Headless;
