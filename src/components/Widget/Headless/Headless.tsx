import Widget from "../Widget/Widget";

function Headless() {
  const settingsId = "headless";
  return (
    <div className="self-start">
      <Widget settingsId={settingsId} style={{ withBackground: false }} />
    </div>
  );
}

export default Headless;
