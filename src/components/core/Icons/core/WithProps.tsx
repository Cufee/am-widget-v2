import styled from "styled-components";
import IconProps from "./types/IconProps";

const WithProps = styled.svg<IconProps>`
  ${(props) => `
width: ${props.size};
height: ${props.size};
`}
  ${(props) => props.color && `fill: ${props.color}`}
`;

export default WithProps;
