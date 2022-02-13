import DoubleArrowUp from "../../core/Icons/Arrow/DoubleArrowUp";
import DoubleArrowDown from "../../core/Icons/Arrow/DoubleArrowDown";
import Lock from "../../core/Icons/Lock/Lock";

function Demo() {
  return (
    <div>
      <DoubleArrowUp size="2em" />
      <DoubleArrowDown size="2em" />
      <Lock size="2em" classes={["fill-red-500"]} />
    </div>
  );
}

export default Demo;
