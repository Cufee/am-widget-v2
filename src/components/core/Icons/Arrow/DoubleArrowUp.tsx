import IconProps from "../core/types/IconProps";
import DoubleArrowDown from "./DoubleArrowDown";

function DoubleArrowUp(props: IconProps) {
  return (
    <DoubleArrowDown
      {...props}
      classes={(props.classes || []).concat("-rotate-180")}
    />
  );
}

export default DoubleArrowUp;
