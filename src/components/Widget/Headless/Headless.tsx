import { useLocation } from "react-router-dom";
import Widget from "../Widget/Widget";

function Headless() {
  const location = useLocation();

  const search = new URLSearchParams(location.search);
  const background = search.get("bg") === "true";

  return (
    <div className="self-start">
      <Widget style={{ withBackground: background }} />
    </div>
  );
}

export default Headless;
