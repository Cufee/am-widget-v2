import IconProps from "../core/types/IconProps";
import WithProps from "../core/WithProps";

function Line(props: IconProps) {
  return (
    <WithProps {...props}>
      <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="6 19 12 2">
        <path d="M17 19H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z"></path>
      </svg>
    </WithProps>
  );
}

export default Line;
