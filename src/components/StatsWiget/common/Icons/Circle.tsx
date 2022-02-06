import styled from "styled-components";

interface StyledCircleProps {
  color: string;
  size: string;
}

const StyledCircle = styled.div<StyledCircleProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

function Circle({ color, size }: { color: string; size: string }) {
  return <StyledCircle color={color} size={size} />;
}

export default Circle;
