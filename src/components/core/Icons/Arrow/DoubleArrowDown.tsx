import styled from "styled-components";
import IconProps from "../core/types/IconProps";

const Arrow = styled.svg<IconProps>`
  ${(props) => `
  width: ${props.size};
  height: ${props.size};
  `}
  ${(props) => props.color && `fill: ${props.color}`}
`;

function DoubleArrowDown({ classes, color, size }: IconProps) {
  return (
    <Arrow
      size={size}
      color={color}
      className={classes?.join(" ")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="6.98769998550415 6.98769998550415 10.024576187133789 10.012300491333008"
    >
      <g>
        <path d="M12,17a1,1,0,0,1-.707-.293l-4-4a1,1,0,1,1,1.414-1.414L12,14.586l3.293-3.293a1,1,0,0,1,1.414,1.414l-4,4A1,1,0,0,1,12,17Z"></path>
        <path d="M12,13a1,1,0,0,1-.707-.293l-4-4A1,1,0,1,1,8.707,7.293L12,10.586l3.293-3.293a1,1,0,1,1,1.414,1.414l-4,4A1,1,0,0,1,12,13Z"></path>
      </g>
    </Arrow>
  );
}

export default DoubleArrowDown;
